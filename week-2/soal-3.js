const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, callback) => {
    
    const validator = callback(nilaiAwal, nilaiAkhir, dataArray)

    if (validator !== undefined){
        console.log(validator)
    }
}

// function callback validator
const validator = (awal, akhir, dataArray) => {
    let arr = []

    if(awal < akhir && dataArray.length > 5){
        let sort = dataArray.sort((a, b) => {
            return a-b;
        })

        sort.map(number => {
            if(number > awal && number < akhir)
            arr.push(number)              
        })

        try {
            if(awal > akhir) throw "Nilai akhir harus lebih besar dari nilai awal"
            else if(dataArray.length <= 5) throw "Jumlah angka dalam dataArray harus lebih dari 5"
            else if(arr.length === 0) {
                arr += ""
                throw "Nilai tidak ditemukan"
            }
        } catch (error) {
            console.log(error)
        }

        return arr
    } 
}

seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18], validator)
