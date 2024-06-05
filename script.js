document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const jurusan = document.getElementById('jurusan').value;
    const nilai = document.getElementById('nilai').value;
    const resultDiv = document.getElementById('result');

    let hasil = `Nama: ${nama}<br>Kelas: ${kelas}<br>Jurusan: ${jurusan}<br>Nilai: ${nilai}<br>Status: `;

    if (nilai >= 75) {
        hasil += 'Lulus';
        resultDiv.style.color = 'green';
    } else {
        hasil += 'Tidak Lulus';
        resultDiv.style.color = 'red';
    }

    resultDiv.innerHTML = hasil;
});
