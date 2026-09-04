const state = {
  papers: [],
  selectedIndex: 0,
  quizIndex: 0,
  answered: false,
  stats: JSON.parse(localStorage.getItem("pbr-stats") || '{"attempts":0,"correct":0}')
};

const el = (id) => document.getElementById(id);
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
const listText = (items, fallback = "No disponible en el documento") => Array.isArray(items) && items.length ? items.map(escapeHtml).join(" · ") : fallback;

function loadBundledLibrary() {
  const records = Array.isArray(window.PAPERBACK_LIBRARY) ? window.PAPERBACK_LIBRARY : [];
  state.papers = records.sort((a, b) => (a.paper?.title || a.paper?.id || "").localeCompare(b.paper?.title || b.paper?.id || "", "es"));
  state.selectedIndex = 0;
  renderAll();
  el("library-status").textContent = state.papers.length ? `${state.papers.length} registros sincronizados` : "Biblioteca sin registros";
}

function currentPaper() { return state.papers[state.selectedIndex]; }

function renderAll() {
  renderStats();
  renderPaperList();
  if (!state.papers.length) {
    el("paper-content").innerHTML = `<div class="empty-state"><span>⌁</span><h3>Tu biblioteca está esperando</h3><p>Agregá análisis JSON a la carpeta outputs.</p></div>`;
    el("quiz-content").innerHTML = `<p>El primer quiz aparecerá cuando proceses un paper.</p>`;
    return;
  }
  chooseRandomQuiz();
  renderPaper();
  renderQuiz();
}

function renderStats() {
  const ideas = state.papers.reduce((sum, p) => sum + (p.analysis?.key_ideas?.length || 0), 0);
  el("paper-count").textContent = state.papers.length;
  el("idea-count").textContent = ideas;
  el("practice-count").textContent = state.stats.attempts;
  el("accuracy-value").textContent = state.stats.attempts ? `${Math.round(state.stats.correct / state.stats.attempts * 100)}%` : "—";
}

function renderPaperList() {
  el("paper-list").innerHTML = state.papers.map((item, index) => {
    const title = item.paper?.title || item.paper?.id || "Sin título";
    const authors = item.paper?.authors?.length ? item.paper.authors.join(", ") : "Autor no disponible";
    return `<button class="paper-item ${index === state.selectedIndex ? "active" : ""}" data-paper="${index}">
      <small>${String(index + 1).padStart(2, "0")} / ${escapeHtml(item.paper?.year || "S/F")}</small>
      <strong>${escapeHtml(title)}</strong><span>${escapeHtml(authors)}</span></button>`;
  }).join("");
  document.querySelectorAll("[data-paper]").forEach(button => button.addEventListener("click", () => selectPaper(Number(button.dataset.paper))));
}

function renderPaper() {
  const item = currentPaper();
  const p = item.paper || {};
  const a = item.analysis || {};
  const ideas = a.key_ideas || [];
  const prediction = item.user_prediction?.text;
  const comparison = item.user_prediction?.comparison || {};
  el("paper-content").innerHTML = `
    <span class="paper-kicker">${escapeHtml(p.year || "FECHA NO DISPONIBLE")} · ${ideas.length} IDEAS DESTILADAS</span>
    <h3>${escapeHtml(p.title || p.id || "Sin título")}</h3>
    <p class="paper-byline">${listText(p.authors, "Autor no disponible")}</p>
    <section class="content-block"><h4>PREGUNTA CENTRAL</h4><p>${escapeHtml(a.central_question || "No disponible en el documento")}</p></section>
    <section class="content-block"><h4>IDEAS PRINCIPALES</h4><ol class="ideas">${ideas.map(idea => `
      <li class="idea"><span class="idea-number">${idea.id}</span><div><p>${escapeHtml(idea.idea)}</p>
      <details><summary>Ver evidencia</summary><p>${escapeHtml(idea.evidence || "Sin evidencia registrada")}</p><div class="tags"><span class="tag">${escapeHtml(idea.source_location || "ubicación no disponible")}</span></div></details></div></li>`).join("")}</ol></section>
    <section class="content-block"><h4>CONCLUSIÓN</h4><p>${escapeHtml(a.main_conclusion || "No disponible en el documento")}</p></section>
    <section class="content-block"><h4>MÉTODO</h4><p>${escapeHtml(a.method || "No disponible en el documento")}</p></section>
    <section class="content-block"><h4>TU PREDICCIÓN</h4><p>${prediction ? escapeHtml(prediction).replace(/\n/g, "<br>") : "No se proporcionó una predicción previa."}</p>
      ${prediction ? `<div class="tags"><span class="tag">${comparison.matches?.length || 0} coincidencias</span><span class="tag">${comparison.differences?.length || 0} diferencias</span><span class="tag">${comparison.unresolved?.length || 0} pendientes</span></div>` : ""}
    </section>
    <section class="content-block"><h4>LIMITACIONES</h4><p>${listText(a.limitations)}</p></section>`;
}

function chooseRandomQuiz() {
  const quiz = currentPaper()?.quiz || [];
  state.quizIndex = quiz.length ? Math.floor(Math.random() * quiz.length) : 0;
  state.answered = false;
}

function renderQuiz() {
  const quiz = currentPaper()?.quiz || [];
  const question = quiz[state.quizIndex];
  if (!question) {
    el("quiz-difficulty").textContent = "—";
    el("quiz-content").innerHTML = `<p>Este registro no contiene preguntas.</p>`;
    return;
  }
  el("quiz-difficulty").textContent = question.difficulty || "medium";
  el("quiz-content").innerHTML = `
    <span class="quiz-index">PREGUNTA ${state.quizIndex + 1} DE ${quiz.length}</span>
    <h4 class="quiz-question">${escapeHtml(question.question)}</h4>
    <div class="quiz-options">${(question.options || []).map(option => `<button class="quiz-option" data-option="${escapeHtml(option.id)}"><b>${escapeHtml(option.id)}</b><span>${escapeHtml(option.text)}</span></button>`).join("")}</div>`;
  document.querySelectorAll("[data-option]").forEach(button => button.addEventListener("click", () => answerQuiz(button.dataset.option)));
}

function answerQuiz(optionId) {
  if (state.answered) return;
  state.answered = true;
  const question = currentPaper().quiz[state.quizIndex];
  const correct = optionId === question.correct_option_id;
  state.stats.attempts += 1;
  if (correct) state.stats.correct += 1;
  localStorage.setItem("pbr-stats", JSON.stringify(state.stats));
  document.querySelectorAll("[data-option]").forEach(button => {
    button.disabled = true;
    if (button.dataset.option === question.correct_option_id) button.classList.add("correct");
    else if (button.dataset.option === optionId) button.classList.add("wrong");
  });
  const feedback = document.createElement("div");
  feedback.innerHTML = `<div class="quiz-feedback"><strong>${correct ? "Bien recuperado." : "Todavía no."}</strong>${escapeHtml(question.explanation || "")}</div><button class="quiz-next">Otra pregunta aleatoria ↝</button>`;
  el("quiz-content").appendChild(feedback);
  feedback.querySelector("button").addEventListener("click", () => { chooseRandomQuiz(); renderQuiz(); });
  renderStats();
}

function selectPaper(index) {
  state.selectedIndex = index;
  chooseRandomQuiz();
  renderPaperList();
  renderPaper();
  renderQuiz();
}

function randomPaper() {
  if (!state.papers.length) return;
  let next = Math.floor(Math.random() * state.papers.length);
  if (state.papers.length > 1 && next === state.selectedIndex) next = (next + 1) % state.papers.length;
  selectPaper(next);
  document.querySelector(".reader-grid").scrollIntoView({ behavior: "smooth", block: "start" });
}

el("random-paper").addEventListener("click", randomPaper);
el("surprise-me").addEventListener("click", randomPaper);
loadBundledLibrary();
