//membuat game random dari 1 - 10
//dan bilangan bulat
//kesempatan 3 kali
//computer dan player
//jika angka player lebih tinggi dibandingkan comp maka 'nilai anda terlalu tinggi'

alert('selamat datang di Game Tebak Angka \nby: adisan');


console.log(comp);

	var main = true;

	while( main){
		var comp = Math.random();
	if( comp > 0.9){
		comp = 10;
	}else if( comp <= 0.9 && comp > 0.8){
		comp = 9;
	}else if( comp <= 0.8 && comp > 0.7){
		comp = 8;
	}else if( comp <= 0.7 && comp > 0.6){
		comp = 7;
	}else if( comp <= 0.6 && comp > 0.5){
		comp = 6;
	}else if( comp <= 0.5  && comp > 0.4){
		comp = 5;
	}else if( comp <= 0.4 && comp > 0.3){
		comp = 4;
	}else if( comp <= 0.3 && comp > 0.2){
		comp = 3;
	}else if( comp <= 0.2 && comp > 0.1){
		comp = 2;
	}else{
		comp = 1;
	}

	var uji = 3;
	var ujiNilai = 2;

	while( uji >= 1){
	var player = prompt('pilih angka ! \nrentang angka antara 1 - 10 \n kesempatan anda '+ uji + ' kali menebak');

		
		//menguji
		if( comp == player){
			alert('anda : ' + player + ' dan ' + ' Komputer : ' + comp + '\n Selamat Anda Benar!');
			break;
		}else if( comp > player && player >= 1 && player <= 10){
			alert('Maaf angka yang anda pilih terlalu KECIL dari Komputer \n kesempatan anda : ' + ujiNilai--);
		}else if( comp < player && player >= 1 && player <= 10){
			alert('Maaf angka yang anda pilih terlalu BESAR dari komputer \n kesempatan anda : ' + ujiNilai--);
		}else{
			alert('angka yang anda masukkan salah');
		}

		if( player < 1 || player > 10){ 
			uji = uji;
		}else{
			uji--;
		}
	}
	alert('pilihan komputer : ' + comp + '\n terima kasih ^-^');
	var main = confirm('ingin bermain lagi?');
}
