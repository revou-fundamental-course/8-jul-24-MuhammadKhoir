document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form untuk mengirimkan request secara default

    // Mengambil nilai berat dan tinggi dari nilai yang diinputkan
    let berat = parseFloat(document.getElementById('berat').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value) / 100; // Konversi cm ke meter
    // parseFloat adalah sebuah fungsi bawaan JavaScript yang digunakan untuk mengubah string yang berisi angka menjadi bilangan desimal (floating point).

    // Validasi input
    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0) {
        alert('Silakan masukkan berat dan tinggi yang valid.');
        return;
    }

    // Menghitung BMI
    let bmi = berat / (tinggi * tinggi);

      // Menyesuaikan kategori BMI berdasarkan jenis kelamin
    let interpretasi = '';
    if (jenisKelamin === 'pria') {
        if (bmi < 18.5) {
            interpretasi = 'Kurus';
        } else if (bmi >= 18.5 && bmi < 25) {
            interpretasi = 'Normal';
        } else if (bmi >= 25 && bmi < 30) {
            interpretasi = 'Kelebihan berat badan';
        } else {
            interpretasi = 'Obesitas';
        }
    } else { // Wanita
        if (bmi < 18.5) {
            interpretasi = 'Kurus';
        } else if (bmi >= 18.5 && bmi < 24) {
            interpretasi = 'Normal';
        } else if (bmi >= 24 && bmi < 29) {
            interpretasi = 'Kelebihan berat badan';
        } else {
            interpretasi = 'Obesitas';
        }
    }

    // Menampilkan hasil BMI
     const bmiHasil = document.getElementById('bmiHasil');
    bmiHasil.innerHTML = `<h3>Hasil BMI</h3>
                          <p><b>BMI Anda: ${bmi.toFixed(2)}</b></p>
                          <p>Interpretasi:</p>
                          <p><b>${interpretasi}</b></p>
                          <ul>
                              <li><b>Kurus:</b> BMI kurang dari 18.5</li>
                              <li><b>Normal:</b> BMI antara 18.5 dan 24.9</li>
                              <li><b>Kelebihan berat badan:</b> BMI antara 25 dan 29.9</li>
                              <li><b>Obesitas:</b> BMI 30 atau lebih</li>
                          </ul>`;
});
