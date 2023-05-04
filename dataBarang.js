const fs = require ("fs");
const prompt = require ("prompt-sync")();
const path =require ("path")

function simpanData (namaFile,data){
    const exists =fs.existsSync(namaFile + ".json");
    let existingData = "[]";
    if(!exists){
        fs.mkdirSync(path.dirname(namaFile),{recursive :true});
    }
    else{
        existingData = bacaData (namaFile +".json")
    }
    
    let dataBaru = JSON.parse (existingData);
    dataBaru.push (data);
    dataBaru = JSON.stringify(dataBaru)

    
    
    fs.writeFile(namaFile+".json",dataBaru,function(err){
    if (err){
        throw err;
    }
    });
};


function bacaData(namaFile){
    const data= fs.readFileSync(namaFile); // string
    
    if (data){
        return data.toString("utf-8");
    }
    return undefined;
}

let exit =false
while(!exit){
    console.log("========================");
    console.log("Silahkan Pilih Fitur Dibawah Ini ");
    console.log("1. Menyimpan data stok barang (id barang, nama, harga, kuantitas)");
    console.log("2. menampilkan semua data stok barang");
    console.log("3. menampilkan total harga semua barang (harga * kuantitas)");
    console.log("4. update data barang");
    console.log("5. hapus data barang ");
    
    const Fitur = prompt ("Masukan Nomor Fitur yang Diinginkan : ")
    

    if (Fitur == "1"){
        console.log("========================");
        console.log("Menambahkan Data");

        const idBarang = prompt ("Id Barang : ")
        const nama = prompt ("Nama : ")
        const harga = prompt ("Harga : ")
        const kuantitas = prompt ("Kuantitas  : ")
        
        

        const dataBarang ={
            idBarang,
            nama,
            harga,
            kuantitas, 
            
        }

        simpanData (`dataBarang`,dataBarang);
    }
    else if (Fitur == "2"){
        console.log("========================");
        console.log("menampilkan semua data stok barang");
        const dataBaru1 = fs.readFileSync("dataBarang.json")
            const dataBarangJson =JSON.parse (dataBaru1)
            
            
            const kuantitas = dataBarangJson.map(item => {
                const container = {};
            
                container[item.nama] = item.kuantitas;
                
            
                return container;
            })
            
            console.log(" Seluruh dataBarang : ",dataBarangJson);
            console.log("Map Berdasarkan kuantitas : ",kuantitas);

      
    }
    else if (Fitur==3){
        console.log("========================");
        console.log("menampilkan total harga semua barang (harga * kuantitas)");
        const dataBaru1 = fs.readFileSync("dataBarang.json")
            const dataBarangJson =JSON.parse (dataBaru1)
            
            const total = dataBarangJson.map(item => {
                const container = {};
            
                container[item.nama] = item.kuantitas;
                container[item.nama] = item.harga;
                container.total = item.harga* item.kuantitas;
            
                return container;
            }) 
            
            console.log("Menampilkan Total Harga Semua Barang  : ",total);
    }
    else if (Fitur==4){
        console.log("========================");
        console.log("update data barang");
        const dataBaru1 = fs.readFileSync("dataBarang.json")
            const dataBarangJson =JSON.parse (dataBaru1)
           
                idBarang = prompt ("Id Barang : ")
                nama = prompt ("Nama : ")
                harga = prompt ("Harga : ")
                kuantitas = prompt ("Kuantitas  : ")
                    
                const update = dataBarangJson.map(item => {
                    const container = {};
                
                    container[item.idBarang] ;
                    container[item.nama] ;
                    container[item.harga] ;
                    container[item.kuantitas];
                
                    return container;
                })
            console.log("Menampilkan  Semua Barang  : ",update);
            }
    else if (Fitur==5){
        console.log("========================");
        console.log("menampilkan semua data stok barang");
        const dataBaru1 = fs.readFileSync("dataBarang.json")
            const dataBarangJson =JSON.parse (dataBaru1)
            
            let arr = Array.from(dataBarangJson); // (*)
        console.log("data Setelah di Hapus",arr.pop())

    }
    else {
        console.log("ulangi program");
    }
    
    const ulangi = prompt(" Apakah ingin mengulangi aplikasi () Y/N : ");
    if (ulangi==="N"){
        exit = true
    }
}
    