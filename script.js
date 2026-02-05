// Base de datos de verbos irregulares
const irregularVerbs = [
    // Primera columna de la primera imagen
    { base: "awake", past: "awoke", participle: "awoken", meaning: "despertarse" },
    { base: "be", past: "was/were", participle: "been", meaning: "ser/estar" },
    { base: "bear", past: "bore", participle: "borne/born", meaning: "soportar/llevar" },
    { base: "beat", past: "beat", participle: "beaten", meaning: "golpear/vencer" },
    { base: "become", past: "became", participle: "become", meaning: "convertirse en" },
    { base: "begin", past: "began", participle: "begun", meaning: "empezar" },

    // Segunda columna de la primera imagen
    { base: "drive", past: "drove", participle: "driven", meaning: "conducir" },
    { base: "eat", past: "ate", participle: "eaten", meaning: "comer" },
    { base: "fall", past: "fell", participle: "fallen", meaning: "caer" },
    { base: "feed", past: "fed", participle: "fed", meaning: "alimentar" },
    { base: "feel", past: "felt", participle: "felt", meaning: "sentir" },
    { base: "fight", past: "fought", participle: "fought", meaning: "pelear" },

    // Segunda imagen - Primera columna
    { base: "bend", past: "bent", participle: "bent", meaning: "doblar" },
    { base: "bet", past: "bet", participle: "bet", meaning: "apostar" },
    { base: "bite", past: "bit", participle: "bitten", meaning: "morder" },
    { base: "bleed", past: "bled", participle: "bled", meaning: "sangrar" },
    { base: "blow", past: "blew", participle: "blown", meaning: "soplar" },
    { base: "break", past: "broke", participle: "broken", meaning: "romper" },
    { base: "bring", past: "brought", participle: "brought", meaning: "traer" },
    { base: "broadcast", past: "broadcast", participle: "broadcast", meaning: "transmitir" },
    { base: "build", past: "built", participle: "built", meaning: "construir" },
    { base: "burn", past: "burnt/burned", participle: "burnt/burned", meaning: "quemar" },
    { base: "buy", past: "bought", participle: "bought", meaning: "comprar" },
    { base: "catch", past: "caught", participle: "caught", meaning: "atrapar" },
    { base: "choose", past: "chose", participle: "chosen", meaning: "elegir" },
    { base: "come", past: "came", participle: "come", meaning: "venir" },
    { base: "cost", past: "cost", participle: "cost", meaning: "costar" },
    { base: "cut", past: "cut", participle: "cut", meaning: "cortar" },
    { base: "dig", past: "dug", participle: "dug", meaning: "cavar" },
    { base: "do", past: "did", participle: "done", meaning: "hacer" },
    { base: "draw", past: "drew", participle: "drawn", meaning: "dibujar" },
    { base: "dream", past: "dreamt/dreamed", participle: "dreamt/dreamed", meaning: "soñar" },
    { base: "drink", past: "drank", participle: "drunk", meaning: "beber" },

    // Segunda imagen - Segunda columna
    { base: "find", past: "found", participle: "found", meaning: "encontrar" },
    { base: "fly", past: "flew", participle: "flown", meaning: "volar" },
    { base: "forbid", past: "forbade", participle: "forbidden", meaning: "prohibir" },
    { base: "forget", past: "forgot", participle: "forgotten", meaning: "olvidar" },
    { base: "forgive", past: "forgave", participle: "forgiven", meaning: "perdonar" },
    { base: "freeze", past: "froze", participle: "frozen", meaning: "congelar" },
    { base: "get", past: "got", participle: "gotten/got", meaning: "conseguir" },
    { base: "give", past: "gave", participle: "given", meaning: "dar" },
    { base: "go", past: "went", participle: "gone", meaning: "ir" },
    { base: "grow", past: "grew", participle: "grown", meaning: "crecer" },
    { base: "hang", past: "hung", participle: "hung", meaning: "colgar" },
    { base: "have", past: "had", participle: "had", meaning: "tener" },
    { base: "hear", past: "heard", participle: "heard", meaning: "oír" },
    { base: "hit", past: "hit", participle: "hit", meaning: "golpear" },
    { base: "hold", past: "held", participle: "held", meaning: "sostener" },
    { base: "hurt", past: "hurt", participle: "hurt", meaning: "herir" },
    { base: "keep", past: "kept", participle: "kept", meaning: "guardar" },
    { base: "know", past: "knew", participle: "known", meaning: "saber" },
    { base: "lay", past: "laid", participle: "laid", meaning: "poner" },
    { base: "learn", past: "learnt/learned", participle: "learnt/learned", meaning: "aprender" },
    { base: "leave", past: "left", participle: "left", meaning: "dejar" },
    { base: "lend", past: "lent", participle: "lent", meaning: "prestar" },
    { base: "let", past: "let", participle: "let", meaning: "permitir" },
    { base: "lie", past: "lay", participle: "lain", meaning: "yacer" },
    { base: "light", past: "lit", participle: "lit", meaning: "encender" },

    // Segunda imagen - Continuación segunda columna
    { base: "smell", past: "smelt/smelled", participle: "smelt/smelled", meaning: "oler" },
    { base: "speak", past: "spoke", participle: "spoken", meaning: "hablar" },
    { base: "spill", past: "spilt/spilled", participle: "spilt/spilled", meaning: "derramar" },
    { base: "spend", past: "spent", participle: "spent", meaning: "gastar" },

    // Tercera fila de la segunda imagen
    { base: "lose", past: "lost", participle: "lost", meaning: "perder" },
    { base: "make", past: "made", participle: "made", meaning: "hacer" },
    { base: "mean", past: "meant", participle: "meant", meaning: "significar" },
    { base: "meet", past: "met", participle: "met", meaning: "conocer/encontrarse" },
    { base: "pay", past: "paid", participle: "paid", meaning: "pagar" },

    // Segunda columna tercera fila
    { base: "split", past: "split", participle: "split", meaning: "dividir" },
    { base: "spoil", past: "spoilt/spoiled", participle: "spoilt/spoiled", meaning: "estropear" },
    { base: "spread", past: "spread", participle: "spread", meaning: "extender" },
    { base: "spring", past: "sprang", participle: "sprung", meaning: "saltar/brotar" },
    { base: "stand", past: "stood", participle: "stood", meaning: "estar de pie" },

    // Tercera imagen - Primera columna
    { base: "put", past: "put", participle: "put", meaning: "poner" },
    { base: "read", past: "read", participle: "read", meaning: "leer" },
    { base: "ride", past: "rode", participle: "ridden", meaning: "montar" },
    { base: "ring", past: "rang", participle: "rung", meaning: "sonar" },
    { base: "rise", past: "rose", participle: "risen", meaning: "levantarse" },
    { base: "run", past: "ran", participle: "run", meaning: "correr" },
    { base: "say", past: "said", participle: "said", meaning: "decir" },
    { base: "see", past: "saw", participle: "seen", meaning: "ver" },
    { base: "sell", past: "sold", participle: "sold", meaning: "vender" },
    { base: "send", past: "sent", participle: "sent", meaning: "enviar" },
    { base: "shake", past: "shook", participle: "shaken", meaning: "sacudir" },
    { base: "shine", past: "shone", participle: "shone", meaning: "brillar" },
    { base: "shoot", past: "shot", participle: "shot", meaning: "disparar" },
    { base: "show", past: "showed", participle: "shown", meaning: "mostrar" },
    { base: "shut", past: "shut", participle: "shut", meaning: "cerrar" },
    { base: "sing", past: "sang", participle: "sung", meaning: "cantar" },
    { base: "sit", past: "sat", participle: "sat", meaning: "sentarse" },
    { base: "sleep", past: "slept", participle: "slept", meaning: "dormir" },

    // Tercera imagen - Segunda columna
    { base: "steal", past: "stole", participle: "stolen", meaning: "robar" },
    { base: "stick", past: "stuck", participle: "stuck", meaning: "pegar" },
    { base: "sting", past: "stung", participle: "stung", meaning: "picar" },
    { base: "sweep", past: "swept", participle: "swept", meaning: "barrer" },
    { base: "swim", past: "swam", participle: "swum", meaning: "nadar" },
    { base: "swing", past: "swung", participle: "swung", meaning: "balancear" },
    { base: "take", past: "took", participle: "taken", meaning: "tomar" },
    { base: "teach", past: "taught", participle: "taught", meaning: "enseñar" },
    { base: "tear", past: "tore", participle: "torn", meaning: "rasgar" },
    { base: "tell", past: "told", participle: "told", meaning: "decir/contar" },
    { base: "think", past: "thought", participle: "thought", meaning: "pensar" },
    { base: "throw", past: "threw", participle: "thrown", meaning: "lanzar" },
    { base: "understand", past: "understood", participle: "understood", meaning: "entender" },
    { base: "wake", past: "woke", participle: "woken", meaning: "despertar" },
    { base: "wear", past: "wore", participle: "worn", meaning: "llevar puesto" },
    { base: "win", past: "won", participle: "won", meaning: "ganar" },
    { base: "write", past: "wrote", participle: "written", meaning: "escribir" },
];

// Variables globales
let selectedVerbs = [];
let currentVerbIndex = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let skippedAnswers = 0;
let totalVerbs = 20;
let practiceHistory = [];
let currentQuestionType = "";
let currentGivenForm = "";

// Elementos del DOM
const setupSection = document.getElementById('setup-section');
const practiceSection = document.getElementById('practice-section');
const resultsSection = document.getElementById('results-section');
const countButtons = document.querySelectorAll('.count-btn');
const startBtn = document.getElementById('start-btn');
const difficultySelect = document.getElementById('difficulty');
const currentScoreEl = document.getElementById('current-score');
const totalVerbsEl = document.getElementById('total-verbs');
const progressFill = document.getElementById('progress-fill');
const currentProgressEl = document.getElementById('current-progress');
const verbDisplay = document.getElementById('verb-display');
const questionText = document.getElementById('question-text');
const baseFormInput = document.getElementById('base-form');
const pastFormInput = document.getElementById('past-form');
const participleFormInput = document.getElementById('participle-form');
const meaningFormInput = document.getElementById('meaning-form');
const checkBtn = document.getElementById('check-btn');
const skipBtn = document.getElementById('skip-btn');
const feedbackEl = document.getElementById('feedback');
const finalScoreEl = document.getElementById('final-score');
const correctCountEl = document.getElementById('correct-count');
const incorrectCountEl = document.getElementById('incorrect-count');
const skippedCountEl = document.getElementById('skipped-count');
const gradeEl = document.getElementById('grade');
const resultsList = document.getElementById('results-list');
const restartBtn = document.getElementById('restart-btn');
const newPracticeBtn = document.getElementById('new-practice-btn');

// Inicialización
function init() {
    // Configurar botones de cantidad
    countButtons.forEach(button => {
        button.addEventListener('click', () => {
            countButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            totalVerbs = parseInt(button.dataset.count);
            totalVerbsEl.textContent = totalVerbs;
        });
    });

    // Configurar botón de empezar
    startBtn.addEventListener('click', startPractice);

    // Configurar botón de comprobar
    checkBtn.addEventListener('click', checkAnswer);

    // Configurar botón de saltar
    skipBtn.addEventListener('click', skipVerb);

    // Configurar botones de resultados
    restartBtn.addEventListener('click', restartPractice);
    newPracticeBtn.addEventListener('click', showSetup);

    // Permitir usar Enter para comprobar respuesta
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !practiceSection.classList.contains('hidden')) {
            checkAnswer();
        }
    });

    // Inicializar con 20 verbos por defecto
    totalVerbsEl.textContent = totalVerbs;
}

// Función para normalizar respuestas
function normalizeAnswer(answer) {
    if (!answer) return "";
    return answer.toString().toLowerCase().trim()
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s+/g, ' ')
        .replace(/\/$/, '')
        .replace(/^\//, '');
}

// Función para comparar respuestas
function answersMatch(userAnswer, correctAnswer) {
    const normalizedUser = normalizeAnswer(userAnswer);
    const normalizedCorrect = normalizeAnswer(correctAnswer);

    if (normalizedCorrect.includes('/')) {
        const alternatives = normalizedCorrect.split('/');
        return alternatives.some(alt => normalizeAnswer(alt) === normalizedUser);
    }

    return normalizedUser === normalizedCorrect;
}

// Función para mezclar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Función para seleccionar verbos aleatorios
function selectRandomVerbs(count) {
    const shuffled = shuffleArray(irregularVerbs);
    return shuffled.slice(0, count);
}

// Función para determinar qué forma mostrar según dificultad
function getQuestionType(difficulty) {
    const types = ['base', 'past', 'participle', 'meaning']; // Agregado 'meaning'

    switch (difficulty) {
        case 'easy':
            return 'base'; // Siempre muestra la forma base
        case 'medium':
            // En medium, solo base, past o participle
            const mediumTypes = ['base', 'past', 'participle'];
            return mediumTypes[Math.floor(Math.random() * mediumTypes.length)];
        case 'hard':
            // En hard, puede ser cualquier forma incluida la traducción
            return types[Math.floor(Math.random() * types.length)];
        default:
            return 'base';
    }
}

// Función para mostrar la forma conocida del verbo
function displayVerbForm(verb, questionType) {
    let formToShow = "";
    let instruction = "";

    switch (questionType) {
        case 'base':
            formToShow = verb.base;
            instruction = `Forma base: <strong>${verb.base}</strong>`;
            break;
        case 'past':
            formToShow = verb.past;
            instruction = `Pasado simple: <strong>${verb.past}</strong>`;
            break;
        case 'participle':
            formToShow = verb.participle;
            instruction = `Participio pasado: <strong>${verb.participle}</strong>`;
            break;
        case 'meaning':
            formToShow = verb.meaning;
            instruction = `Significado en español: <strong>${verb.meaning}</strong>`;
            break;
    }

    verbDisplay.innerHTML = instruction;
    currentGivenForm = formToShow;
}

// Función para empezar la práctica
function startPractice() {
    // Obtener configuración
    const difficulty = difficultySelect.value;

    // Seleccionar verbos aleatorios
    selectedVerbs = selectRandomVerbs(totalVerbs);

    // Reiniciar variables
    currentVerbIndex = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    skippedAnswers = 0;
    practiceHistory = [];

    // Actualizar interfaz
    currentScoreEl.textContent = score;
    currentProgressEl.textContent = `Verbo 0 de ${totalVerbs}`;
    progressFill.style.width = '0%';

    // Limpiar campos
    clearInputFields();
    feedbackEl.classList.add('hidden');

    // Mostrar sección de práctica
    setupSection.classList.add('hidden');
    practiceSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');

    // Mostrar primer verbo
    showNextVerb();
}

// Función para mostrar el siguiente verbo
function showNextVerb() {
    checkBtn.disabled = false;
    skipBtn.disabled = false;
    if (currentVerbIndex >= selectedVerbs.length) {
        showResults();
        return;
    }

    const verb = selectedVerbs[currentVerbIndex];
    const difficulty = difficultySelect.value;

    // Determinar qué forma mostrar
    currentQuestionType = getQuestionType(difficulty);

    // Mostrar la forma conocida
    displayVerbForm(verb, currentQuestionType);

    // Actualizar progreso
    updateProgress();

    // Limpiar campos de entrada
    clearInputFields();

    // Ocultar feedback anterior
    feedbackEl.classList.add('hidden');

    // Poner foco en el primer campo vacío
    focusFirstEmptyField();
}

// Función para limpiar campos de entrada
function clearInputFields() {
    baseFormInput.value = '';
    pastFormInput.value = '';
    participleFormInput.value = '';
    meaningFormInput.value = '';

    // Quitar clases de error/success
    baseFormInput.classList.remove('correct', 'incorrect');
    pastFormInput.classList.remove('correct', 'incorrect');
    participleFormInput.classList.remove('correct', 'incorrect');
    meaningFormInput.classList.remove('correct', 'incorrect');

    // Habilitar todos los campos
    baseFormInput.disabled = false;
    pastFormInput.disabled = false;
    participleFormInput.disabled = false;
    meaningFormInput.disabled = false;
}

// Función para poner foco en el primer campo vacío
function focusFirstEmptyField() {
    const inputs = [baseFormInput, pastFormInput, participleFormInput, meaningFormInput];

    // Dependiendo de la pregunta, algunos campos ya están "llenos"
    if (currentQuestionType === 'base') {
        baseFormInput.value = currentGivenForm;
        baseFormInput.disabled = true;
        pastFormInput.focus();
    } else if (currentQuestionType === 'past') {
        pastFormInput.value = currentGivenForm;
        pastFormInput.disabled = true;
        baseFormInput.focus();
    } else if (currentQuestionType === 'participle') {
        participleFormInput.value = currentGivenForm;
        participleFormInput.disabled = true;
        baseFormInput.focus();
    } else if (currentQuestionType === 'meaning') {
        meaningFormInput.value = currentGivenForm;
        meaningFormInput.disabled = true;
        baseFormInput.focus();
    } else {
        baseFormInput.focus();
    }
}

// Función para actualizar progreso
function updateProgress() {
    const progress = ((currentVerbIndex) / selectedVerbs.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentProgressEl.textContent = `Verbo ${currentVerbIndex} de ${selectedVerbs.length}`;
    currentScoreEl.textContent = score;
}

// Función para comprobar respuesta
function checkAnswer() {
    checkBtn.disabled = true;
    skipBtn.disabled = true;
    const verb = selectedVerbs[currentVerbIndex];
    const userBase = baseFormInput.value;
    const userPast = pastFormInput.value;
    const userParticiple = participleFormInput.value;
    const userMeaning = meaningFormInput.value;

    // Verificar cada campo (teniendo en cuenta que uno ya está dado)
    let baseCorrect = true;
    let pastCorrect = true;
    let participleCorrect = true;
    let meaningCorrect = true;

    if (currentQuestionType !== 'base') {
        baseCorrect = answersMatch(userBase, verb.base);
    }

    if (currentQuestionType !== 'past') {
        pastCorrect = answersMatch(userPast, verb.past);
    }

    if (currentQuestionType !== 'participle') {
        participleCorrect = answersMatch(userParticiple, verb.participle);
    }

    if (currentQuestionType !== 'meaning') {
        meaningCorrect = answersMatch(userMeaning, verb.meaning);
    }

    // Determinar si la respuesta es completamente correcta
    const allCorrect = baseCorrect && pastCorrect && participleCorrect && meaningCorrect;

    // Actualizar puntuación
    if (allCorrect) {
        score++;
        correctAnswers++;
        showFeedback(true, verb);
    } else {
        incorrectAnswers++;
        showFeedback(false, verb, {
            base: { user: userBase, correct: baseCorrect },
            past: { user: userPast, correct: pastCorrect },
            participle: { user: userParticiple, correct: participleCorrect },
            meaning: { user: userMeaning, correct: meaningCorrect }
        });
    }

    // Registrar en el historial
    practiceHistory.push({
        verb: verb,
        correct: allCorrect,
        skipped: false,
        userAnswers: {
            base: userBase,
            past: userPast,
            participle: userParticiple,
            meaning: userMeaning
        }
    });

    // Habilitar campos deshabilitados
    baseFormInput.disabled = false;
    pastFormInput.disabled = false;
    participleFormInput.disabled = false;
    meaningFormInput.disabled = false;

    // Pasar al siguiente verbo después de un breve delay
    setTimeout(() => {
        currentVerbIndex++;
        showNextVerb();
    }, 9000);
}

// Función para mostrar feedback
function showFeedback(isCorrect, verb, fieldResults = null) {
    feedbackEl.innerHTML = '';
    feedbackEl.classList.remove('hidden');

    if (isCorrect) {
        feedbackEl.classList.remove('incorrect');
        feedbackEl.classList.add('correct');

        feedbackEl.innerHTML = `
            <h3><i class="fas fa-check-circle"></i> ¡Correcto!</h3>
            <p>Has acertado todas las formas del verbo <strong>${verb.base}</strong>.</p>
            <div class="answer-details">
                <div class="answer-item">
                    <p><strong>Forma base:</strong> ${verb.base}</p>
                </div>
                <div class="answer-item">
                    <p><strong>Pasado:</strong> ${verb.past}</p>
                </div>
                <div class="answer-item">
                    <p><strong>Participio:</strong> ${verb.participle}</p>
                </div>
                <div class="answer-item">
                    <p><strong>Significado:</strong> ${verb.meaning}</p>
                </div>
            </div>
            <p class="next-hint">Pasando al siguiente verbo...</p>
        `;
    } else {
        feedbackEl.classList.remove('correct');
        feedbackEl.classList.add('incorrect');

        let detailsHTML = '';

        if (fieldResults) {
            detailsHTML = `
                <div class="answer-details">
                    <div class="answer-item">
                        <p><strong>Forma base:</strong> 
                            <span class="user-answer ${fieldResults.base.correct ? 'correct' : 'incorrect'}">${fieldResults.base.user || '(vacío)'}</span>
                            ${!fieldResults.base.correct ? `<span class="correct-answer">→ ${verb.base}</span>` : ''}
                        </p>
                    </div>
                    <div class="answer-item">
                        <p><strong>Pasado:</strong> 
                            <span class="user-answer ${fieldResults.past.correct ? 'correct' : 'incorrect'}">${fieldResults.past.user || '(vacío)'}</span>
                            ${!fieldResults.past.correct ? `<span class="correct-answer">→ ${verb.past}</span>` : ''}
                        </p>
                    </div>
                    <div class="answer-item">
                        <p><strong>Participio:</strong> 
                            <span class="user-answer ${fieldResults.participle.correct ? 'correct' : 'incorrect'}">${fieldResults.participle.user || '(vacío)'}</span>
                            ${!fieldResults.participle.correct ? `<span class="correct-answer">→ ${verb.participle}</span>` : ''}
                        </p>
                    </div>
                    <div class="answer-item">
                        <p><strong>Significado:</strong> 
                            <span class="user-answer ${fieldResults.meaning.correct ? 'correct' : 'incorrect'}">${fieldResults.meaning.user || '(vacío)'}</span>
                            ${!fieldResults.meaning.correct ? `<span class="correct-answer">→ ${verb.meaning}</span>` : ''}
                        </p>
                    </div>
                </div>
            `;
        }

        feedbackEl.innerHTML = `
            <h3><i class="fas fa-times-circle"></i> Respuesta incorrecta</h3>
            <p>El verbo correcto es <strong>${verb.base}</strong>.</p>
            ${detailsHTML}
            <p class="next-hint">Pasando al siguiente verbo...</p>
        `;
    }
}

// Función para saltar verbo
function skipVerb() {
    const verb = selectedVerbs[currentVerbIndex];

    // Registrar como saltado
    practiceHistory.push({
        verb: verb,
        correct: false,
        skipped: true,
        userAnswers: {
            base: '',
            past: '',
            participle: '',
            meaning: ''
        }
    });

    skippedAnswers++;

    // Habilitar campos deshabilitados
    baseFormInput.disabled = false;
    pastFormInput.disabled = false;
    participleFormInput.disabled = false;
    meaningFormInput.disabled = false;

    // Pasar al siguiente verbo
    currentVerbIndex++;
    showNextVerb();
}

// Función para mostrar resultados
function showResults() {
    // Calcular nota (sobre 10)
    const percentage = (score / totalVerbs) * 100;
    let grade = "";

    if (percentage >= 90) grade = "Sobresaliente (10)";
    else if (percentage >= 80) grade = "Notable (9)";
    else if (percentage >= 70) grade = "Notable (8)";
    else if (percentage >= 60) grade = "Bien (7)";
    else if (percentage >= 50) grade = "Suficiente (6)";
    else if (percentage >= 40) grade = "Suficiente (5)";
    else grade = "Insuficiente (<5)";

    // Actualizar elementos de resultados
    finalScoreEl.textContent = score;
    correctCountEl.textContent = correctAnswers;
    incorrectCountEl.textContent = incorrectAnswers;
    skippedCountEl.textContent = skippedAnswers;
    gradeEl.textContent = grade;

    // Mostrar lista de resultados
    showResultsList();

    // Cambiar a sección de resultados
    practiceSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}

// Función para mostrar lista de resultados
function showResultsList() {
    resultsList.innerHTML = '';

    practiceHistory.forEach((item, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${item.correct ? 'correct' : item.skipped ? 'skipped' : 'incorrect'}`;

        const status = item.correct ? 'Correcto' : item.skipped ? 'Saltado' : 'Incorrecto';
        const statusClass = item.correct ? 'correct' : item.skipped ? 'skipped' : 'incorrect';

        resultItem.innerHTML = `
            <div class="result-verb">
                <strong>${item.verb.base}</strong> - ${item.verb.meaning}
            </div>
            <div class="result-status ${statusClass}">${status}</div>
        `;

        resultsList.appendChild(resultItem);
    });
}

// Función para reiniciar práctica
function restartPractice() {
    // Mantener misma configuración pero mezclar verbos de nuevo
    selectedVerbs = selectRandomVerbs(totalVerbs);

    // Reiniciar variables
    currentVerbIndex = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    skippedAnswers = 0;
    practiceHistory = [];

    // Actualizar interfaz
    currentScoreEl.textContent = score;
    currentProgressEl.textContent = `Verbo 0 de ${totalVerbs}`;
    progressFill.style.width = '0%';

    // Limpiar campos
    clearInputFields();
    feedbackEl.classList.add('hidden');

    // Volver a práctica
    resultsSection.classList.add('hidden');
    practiceSection.classList.remove('hidden');

    // Mostrar primer verbo
    showNextVerb();
}

// Función para volver a configuración
function showSetup() {
    resultsSection.classList.add('hidden');
    setupSection.classList.remove('hidden');
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', init);