function BaglantiBilgi(ozellikler) {
    

    return (
        <p className={BaglantiDurumu ? "olumlu-mesaj" : "uyari"}>
            {BaglantiBilgi === true? "Baglanti var":"Baglanti yok"}
        </p>
    )
}