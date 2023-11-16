import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}){

  return(
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
    </p>
    </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}

function App() {

  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React");
   //state her bilesenin kendi durumun tutar
  //State değişeni, bir uygulama içindeki durumu temsil eden ve 
  //zaman içinde değişebilen bir değişkendir.
  /*
  Lifting state, React uygulamalarında birden fazla
   bileşen arasında paylaşılan durumu bir üst 
  bileşende tutarak, bu durumu iletmek ve güncellemek anlamına gelir.
  */
  //props en ust bilesende en alt bilesene veri aktarmasini saglar
//state kavrami veriyi degistirmeni saglar 

const yaziListesi = [
  {
    baslik: "React Öğreniyorum",
    url: "www.sdu.edu.tr",
    yazar: "Murad Eyvazli",
    yorum_sayisi: 3,
    puan: 4,
    id: 0,
  },
  {
    baslik: "Web Teknolojileri ve Programlama",
    url: "wwww.google.com.tr",
    yazar: "Rahim Sevda",
    yorum_sayisi: 2,
    puan: 5,
    id: 1,
  },
  {
    baslik: "Introduction to JavaScript",
    url: "www.example.com/js",
    yazar: "Jane Doe",
    yorum_sayisi: 8,
    puan: 4,
    id: 2,
  },
  {
    baslik: "Frontend Development Basics",
    url: "www.example.com/frontend",
    yazar: "John Smith",
    yorum_sayisi: 5,
    puan: 3,
    id: 3,
  },
  {
    baslik: "Learning React Hooks",
    url: "www.example.com/react-hooks",
    yazar: "Sara Johnson",
    yorum_sayisi: 12,
    puan: 5,
    id: 4,
  },
  {
    baslik: "Node.js for Beginners",
    url: "www.example.com/nodejs",
    yazar: "Alex Turner",
    yorum_sayisi: 6,
    puan: 4,
    id: 5,
  },
  {
    baslik: "CSS Styling Techniques",
    url: "www.example.com/css-styling",
    yazar: "Emily White",
    yorum_sayisi: 10,
    puan: 4,
    id: 6,
  },
  {
    baslik: "Python Programming Fundamentals",
    url: "www.example.com/python-fundamentals",
    yazar: "Mark Miller",
    yorum_sayisi: 15,
    puan: 5,
    id: 7,
  },
  {
    baslik: "Mobile App Development with React Native",
    url: "www.example.com/react-native",
    yazar: "Daniel Brown",
    yorum_sayisi: 7,
    puan: 4,
    id: 8,
  },
  {
    baslik: "Database Design Principles",
    url: "www.example.com/database-design",
    yazar: "Sophie Davis",
    yorum_sayisi: 9,
    puan: 4,
    id: 9,
  },
  {
    baslik: "Responsive Web Design",
    url: "www.example.com/responsive-design",
    yazar: "Andrew Wilson",
    yorum_sayisi: 11,
    puan: 5,
    id: 10,
  },
];
  
  const arananYazilar=yaziListesi.filter(
    function (yazi){
      return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
       ;
    }
  );

  function handleSearch(event){
    setAramaMetni(event.target.value);
  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni)
  },[aramaMetni])
  //bi kere tetiklenir bos birakirsak

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </>
  );
}
export default App;
//vizede nolucak html css java script react js bugun yapdiklarimizdanda sorumluyuz
//10 tane soru olucak test sekilde olucak ve boslukluda olucak state nedir useeffect
// nedir reactin bilesenleri cikicak net props gibi
//bazen kod sorusu soruyo mesela java script ifadesi yazmasini istiyicek
/*

*/