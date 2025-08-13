const questions = [
    { question: "1. Kapan ulang tahun zayla?", answer: "12 Januari" },
    { question: "2. Taman Mini Indonesia terletak di kecamatan? (boleh tanya petugas)", answer: "Cipayung" },
    { question: "3. Ciputat+Bogor=?", answer: "32" },
    { question: "4. Merk Baju apa yang aku pake saat first meet?", answer: "Levis" },
    { question: "5. Peluk aku buat dapet jawaban nomor 5?", answer: "I Love You" }
];

let currentQuestion = 0;

const questionDiv = document.getElementById('question');
const form = document.getElementById('missionForm');
const answerInput = document.getElementById('answer');
const progressDiv = document.getElementById('progress');

function loadQuestion() {
    if (currentQuestion < questions.length) {
        questionDiv.innerText = questions[currentQuestion].question;
        answerInput.value = '';
        progressDiv.innerText = `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;
    } else {
        // Selesai: buka tab baru
        window.open('selesai.html', '_blank');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === questions[currentQuestion].answer.toLowerCase()) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Jawaban salah. Coba lagi!");
    }
});

loadQuestion();
