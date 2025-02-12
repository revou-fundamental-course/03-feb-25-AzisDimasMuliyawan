function convertTemperature() {
    // Mengambil nilai suhu dari input
    let temperature = document.getElementById("temperature").value;
    let conversionType = document.getElementById("conversionType").value;
    let resultText = document.getElementById("resultText");

    // Memeriksa apakah input kosong
    if (temperature === "") {
        alert("Harap masukkan suhu!");
        return;
    }

    // Mengubah input menjadi angka
    temperature = parseFloat(temperature);
    let result, formula;

    // Melakukan konversi berdasarkan pilihan
    if (conversionType === "CtoF") {
        result = (temperature * 9/5) + 32;
        formula = `${temperature}°C × (9/5) + 32 = ${result.toFixed(2)}°F`;
    } else {
        result = (temperature - 32) * 5/9;
        formula = `(${temperature}°F - 32) × 5/9 = ${result.toFixed(2)}°C`;
    }

    // Menampilkan hasil konversi dalam ke dalam popup
    resultText.innerHTML = `<strong>Hasil:</strong> ${result.toFixed(2)}<br><em>${formula}</em>`;
    document.getElementById("popup").style.display = "flex";
}

function resetFields() {
    // Menghapus nilai input dan mengembalikan pilihan ke default
    document.getElementById("temperature").value = "";
    document.getElementById("conversionType").value = "CtoF";
}

function closePopup() {
    // Menutup popup hasil konversi
    document.getElementById("popup").style.display = "none";
}