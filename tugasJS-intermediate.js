// 1. Data Mahasiswa ===========================================================================================
const mahasiswa = [
  { nama: "riki", nilai: 85, jurusan: "Manajemen" },
  { nama: "rifan", nilai: 70, jurusan: "Sistem Informasi" },
  { nama: "riski", nilai: 90, jurusan: "Informatika" },
  { nama: "vina", nilai: 60, jurusan: "Teknik Elektro" }
]

//2. Gunakan ES6 ===========================================================================================
// menggunakan MAP
const namaMahasiswa = mahasiswa.map(mahasiswa=> mahasiswa.nama)
  console.log("daftar mahasiswa =", namaMahasiswa)

// menggunakan filter 
const nilaiLulus = mahasiswa.filter(mahasiswa => mahasiswa.nilai >= 75)
    console.log("mahasiswa", nilaiLulus)

// map dan filter
const nilaiTuntas = mahasiswa
    .filter(mahasiswa => mahasiswa.nilai >= 75)
    .map(mahasiswa => mahasiswa.nama)
console.log("mahasiswa lulus=", nilaiTuntas)

// menggunakan reduce
const nilaiMahasiswa = mahasiswa.map(mahasiswa=> mahasiswa.nilai)
const nilai = nilaiMahasiswa.reduce ((acc,nilaiMahasiswa)=> acc + nilaiMahasiswa,0 )
const ratarata = nilai / nilaiMahasiswa.length
    console.log("rata-rata nilai mahasiswa =", ratarata)

// OPP  ===========================================================================================
class Mahasiswa {
  constructor(nama, nilai, jurusan) {
    this.nama = nama;
    this.nilai = nilai;
    this.jurusan = jurusan;
  }
  getStatus(){
    if (this.nilai >= 75){
        return "lulus"
    } else {
        return "tidak lulus"
    }
  }
}

class mahasiswaBeasiswa extends Mahasiswa{
    constructor(nama,nilai,jurusan){
        super (nama, nilai,jurusan)
        this.beasiswa= true

    }
     statusBeasiswa(){
        return`Nama : ${this.nama},
         Nilai : ${this.nilai}, 
         Jurusan: ${this.jurusan},
         Menerima beasiswa : ${this.beasiswa}`

    }
} 
const mhs1= new mahasiswaBeasiswa ("riki", 80, "manajemen", )
console.log("status riki :",mhs1.getStatus())
console.log( mhs1.statusBeasiswa())

const mhs2= new mahasiswaBeasiswa ("adi", 90, "manajemen", )
console.log("status adi :",mhs2.getStatus())
console.log( mhs2.statusBeasiswa())

const mhs3= new mahasiswaBeasiswa ("sahroni", 67, "manajemen", )
console.log("status sahroni :",mhs3.getStatus())
console.log( mhs3.statusBeasiswa())

// 5.Asynchronous dengan Promise  ===========================================================================================

const myPromise = new Promise ((resolve,seject)=>{
    const succes= true;
    setTimeout(() => {
        if (succes){
        resolve ("data berhasil diambil")
    }else{
        reject ("data tidak dapat diambil")
    }
    }, 2000);
}) 
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(()=> console.log ("selesai"))

// 6.Async / Await ===========================================================================================

async function getStatus() {
    try{
        const response = await myPromise
    }catch (error){
    console.error(error)
    }finally{
        console.log("data berhasil diambil dari server")
    }
}
getStatus();