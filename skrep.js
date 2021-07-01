const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require('axios')

exports.corona = async (country) => {
  if (!country) return loghandler.noinput;
  try {
   const res = await axios.request(`https://www.worldometers.info/coronavirus/country/` + country, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  let result = {};
  const $ = cheerio.load(res.data);
  result.status = res.status
  result.negara = $("div").find("h1").text().slice(3).split(/ /g)[0];
  result.total_kasus = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(0).text() + " total";
  result.total_kematian = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(1).text() + " total";
  result.total_sembuh = $("div#maincounter-wrap").find("div.maincounter-number > span").eq(2).text() + " total";
  result.informasi = $("div.content-inner > div").eq(1).text();
  result.informasi_lengkap = "https://www.worldometers.info/coronavirus/country/" + country;
  if(result.negara == ''){
  result.status = 'error'
}
  return result;
  } catch (error404) {
    return "=> Error => " + error404;
  }
};

exports.mangatoon = async (search) => {
  if (!search) return "No Querry Input! Bakaa >\/\/<";
  try {
  const res = await axios.get(`https://mangatoon.mobi/en/search?word=${search}`, {
    method: "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
    }
  });
  const hasil = [];
  const $ = cheerio.load(res.data);
  $('div.recommend-item').each(function(a, b) {
    let comic_name = $(b).find('div.recommend-comics-title > span').text();
    let comic_type = $(b).find('div.comics-type > span').text().slice(1).split(/ /g).join("");
    let comic_url = $(b).find('a').attr('href');
    let comic_thumb = $(b).find('img').attr('src');
    const result = {
      status: res.status,
      creator: "@dehan_j1ng",
      comic_name,
      comic_type,
      comic_url: 'https://mangatoon.mobi' + comic_url,
      comic_thumb
    };
    hasil.push(result);
  });
  let filt = hasil.filter(v => v.comic_name !== undefined && v.comic_type !== undefined);
  return filt;
  } catch (eror404) {
    return "=> Error =>" + eror404;
  }
}

exports.palingmurah = async (produk) => {
  if (!produk) {
    return new TypeError("No Querry Input! Bakaaa >\/\/<")
  }
  try {
const res = await axios.get(`https://palingmurah.net/pencarian-produk/?term=` + produk)
const hasil = []
const $ = cheerio.load(res.data)
$('div.ui.card.wpj-card-style-2 ').each(function (a, b) {
let url = $(b).find('a.image').attr('href')
let img = $(b).find('img.my_image.lazyload').attr('data-src')
let title = $(b).find('a.list-header').text().trim()
let product_desc = $(b).find('div.description.visible-on-list').text().trim()
let price = $(b).find('div.flex-master.card-job-price.text-right.text-vertical-center').text().trim()
const result = {
  status: res.status,
  creator: "@dehan_j1ng",
	product: title,
	product_desc: product_desc,
	product_image: img,
	product_url: url,
	price
}
hasil.push(result)
})
  return hasil
  } catch (error404) {
    return new Error("=> Error =>" + error404)
  }
}

exports.mediafire = (query) => {
	return new Promise((resolve,reject) => {
		axios.get(query)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const judul = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > div.intro.icon.jpeg.image.image_jpeg > div.filename').text();
		  	const size = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(1) > span').text();
		  	const upload_date = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
		  	const link = $('#downloadButton').attr('href')
		  	const hsil = {
		  		judul : judul,
		  		upload_date : upload_date,
		  		size : size,
		  		link : link
		  	}
		  resolve(hsil)
		})
		.catch(reject)
	})
}
exports.artinama = (query) => {
        return new Promise((resolve,reject) => {
        	queryy = query.replace(/ /g, '+')
                axios.get('https://www.primbon.com/arti_nama.php?nama1=' + query +'&proses=+Submit%21+')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = $('#body').text();
						const result2 = result.split('\n      \n        \n        \n')[0]
						const result4 = result2.split('ARTI NAMA')[1]
						const result5 = result4.split('.\n\n')
						const result6 = result5[0] + '\n\n' + result5[1]
                  resolve(result6)
                })
                .catch(reject)
        })
}

exports.drakor = (query) => {
        return new Promise((resolve,reject) => {
        	queryy = query.replace(/ /g, '+')
                axios.get('https://drakorasia.net/?s=' + queryy + '&post_type=post')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
                        const link = [];
						const judul = [];
						const thumb = [];
                        $('#post > div > div.thumbnail > a').each(function(a,b) {
                                link.push($(b).attr('href'))
                        		thumb.push($(b).find('img').attr('src'))
                        })
                        $('#post > div > div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a > h2').each(function(c,d) {
                        	titel = $(d).text();
                        	judul.push(titel)
                        })
        for(let i=0; i<link.length; i++){
        	result.push({
        		judul : judul[i],
        		thumb : thumb[i],
        		link : link[i]

        	})
        }
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.wattpad = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://www.wattpad.com/search/' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
						const linkk= [];
						const judull = [];
						const thumb = [];
						const creator = [];
                        			$('ul.list-group > li.list-group-item').each(function(a,b) {
                                			linkk.push('https://www.wattpad.com/' + $(b).find('a').attr('href'))
							thumb.push($(b).find('img').attr('src'))
							creator.push($(b).find('img').attr('alt'))
						})
						$('div.content > h5').each(function(c,d) {
							titel = $(d).text();
							judull.push(titel)
						})
for(let i=0; i<linkk.length; i++){
if(!judull[i] == ''){
result.push({
judul : judull[i],
creator : creator[i],
thumb : thumb[i],
link : linkk[i]
})
}
}
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.dewabatch = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://dewabatch.com/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
			const linkk= [];
			const judull = [];
			const thumb = [];
			const rating = [];
                        $('div.thumb > a').each(function(a,b) {
                                linkk.push($(b).attr('href'))
				judull.push($(b).attr('title'))
				thumb.push($(b).find('img').attr('src').split('?resize')[0])
			})
			$('#content > div.postbody > div > div > ul > li > div.dtl > div.footer-content-post.fotdesktoppost > div.contentleft > span:nth-child(1) > rating > ratingval > ratingvalue').each(function(c, d){
				rate = $(d).text();
				rating.push(rate.split(' ')[0])
			})
for(let i=0; i<linkk.length; i++){
result.push({
judul : judull[i],
rating : rating[i],
thumb : thumb[i],
link : linkk[i]
})
}
                  resolve(result)
                })
                .catch(reject)
        })
}


exports.kiryu = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://kiryuu.id/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
			const linkk= [];
			const judull = [];
			const thumb = [];
			const rating = [];
                        $('div.bsx > a').each(function(a,b) {
                                linkk.push($(b).attr('href'))
				judull.push($(b).attr('title'))
				thumb.push($(b).find('img').attr('src').split('?resize')[0])
			})
			$('div.rating > div.numscore').each(function(c,d) {
			rate = $(d).text();
			rating.push(rate)
			})
for(let i=0; i<linkk.length; i++){
result.push({
judul : judull[i],
rating : rating[i],
thumb : thumb[i],
link : linkk[i]
})
}
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.sfilesearch = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://sfile.mobi/search.php?q=' + query + '&search=Search')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
                        const link = [];
                        const neme = [];
const size = [];
                        $('div.w3-card.white > div.list > a').each(function(a,b) {
                                link.push($(b).attr('href'))
                        })
                        $('div.w3-card.white > div.list > a').each(function(c,d) {
                                name = $(d).text();
                                neme.push(name)
                                })
			$('div.w3-card.white > div.list').each(function(e,f) {
                                siz = $(f).text();
                               //sz = siz.
				size.push(siz.split('(')[1])
                                })
for(let i=0; i<link.length; i++){
        result.push({
                nama: neme[i],
		size : size[i].split(')')[0],
                link: link[i]
        })
}
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.carigc = (nama) => {
	return new Promise((resolve,reject) => {
		axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search='+ nama +'&searchby=name')
		.then(({ data }) => {
			const $ = cheerio.load(data);
			const result = [];
			const lnk = [];
			const nm = [];
		$('div.wa-chat-title-container').each(function(a,b){
			const limk = $(b).find('a').attr('href');
			lnk.push(limk)
			})
		$('div.wa-chat-title-text').each(function(c,d) {
			const name = $(d).text();
			nm.push(name)
			})
		for( let i = 0; i < lnk.length; i++){
			result.push({
				nama: nm[i].split('. ')[1],
				link: lnk[i].split('?')[0]
			})
		}
		resolve(result)
		})
	.catch(reject)
	})
}

exports.wikisearch = async (query) => {
const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
let wiki = $('#mf-section-0').find('p').text()
let thumb = $('#mf-section-0').find('div > div > a > img').attr('src')
thumb = thumb ? thumb : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
thumb = 'https:' + thumb
let judul = $('h1#section_0').text()
hasil.push({ wiki, thumb, judul })
return hasil
}

exports.devianart = (query) => {
	return new Promise((resolve,reject) => {
		axios.get('https://www.deviantart.com/search?q=' + query)
		.then(({ data }) =>{
		const $$ = cheerio.load(data)
		 no = ''
		$$('#root > div.hs1JI > div > div._3WsM9 > div > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div:nth-child(1) > div > section > a').each(function(c,d){
			no = $$(d).attr('href')
		})
		axios.get(no)
		.then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		$('#root > main > div > div._2QovI > div._2rKEX._17aAh._1bdC8 > div > div._2HK_1 > div._1lkTS > div > img').each(function(a,b){
			result.push($(b).attr('src'))
		})
		resolve(result)
		})
	})
		.catch(reject)
	})
}
exports.konachan = (chara) => {
	return new Promise((resolve,reject) => {
		let text = chara.replace(' ','_')
		axios.get('https://konachan.net/post?tags='+ text +'+')
		.then(({ data }) =>{
		const $$ = cheerio.load(data)
		const no = [];
		$$('div.pagination > a').each(function(c,d){
			no.push($$(d).text())
		})
		let mat = Math.floor(Math.random() * no.length)
		axios.get('https://konachan.net/post?page='+ mat +'&tags=' + text + '+')
		.then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		$('#post-list > div.content > div:nth-child(4) > ul > li > a.directlink.largeimg').each(function(a,b){
			result.push($(b).attr('href'))
		})
		resolve(result)
		})
	})
		.catch(reject)
	})
}

exports.wallpapercave = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://wallpapercave.com/search?q=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
                        $('div.imgrow > a').each(function(a,b) {
			if(!$(b).find('img').attr('src').includes('.gif')){
                                result.push('https://wallpapercave.com/' + $(b).find('img').attr('src').replace('fuwp','uwp'))  
                        }})
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.wallpapercraft = (query) => {
	return new Promise((resolve,reject) => {
		axios.get('https://wallpaperscraft.com/search/?query=' + query)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			$('span.wallpapers__canvas').each(function(a,b) {
				result.push($(b).find('img').attr('src'))	
			})
		  resolve(result)
		})
		.catch(reject)
	})
}
exports.wallpaperhd = (chara) => {
	return new Promise((resolve,reject) => {
		axios.get('https://wall.alphacoders.com/search.php?search=' + chara + '&filter=4K+Ultra+HD')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			$('div.boxgrid > a > picture').each(function(a,b) {
				result.push($(b).find('img').attr('src').replace('thumbbig-',''))	
			})
		  resolve(result)
		})
		.catch(reject)
	})
}

