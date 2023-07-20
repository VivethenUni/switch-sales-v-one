import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sticky from 'react-stickynode';
import './box.css';
import './our-games.css';

function OurGames() {
  const gameList = [
    {name: "The Legend of Zelda: TOTK", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c6d38abb408b464413b2dfeb44d2aa460b9f622e1", genre: "Adventure", rating: "5.0/5", year: "2023", price: "$85.49", percent: "5%", purchases: "132"},
    {name: "Super Smash Bros. Ultimate", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9", genre: "Fighting", rating: "4.9/5", year: "2018", price: "$63.99", percent: "20%", purchases: "486"},
    {name: "OCTOPATH TRAVELER II", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000058128/1e6e0b547a00e768e9c67263fedd6c34be54521169b7eb597892767bc72113b4", genre: "RPG", rating: "4.9/5", year: "2023", price: "$59.99", percent: "25%", purchases: "351"},
    {name: "Pokemon Legends: Arceus", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000039945/dcb496d7cf954c7eb51ab2e5d0c27918fb7f055e50f4e902135bd4a70a44b491", genre: "Adventure", rating: "4.9/5", year: "2022", price: "$67.99", percent: "15%", purchases: "304"},
    {name: "Persona 5 Royal", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/en_CA/games/switch/p/persona-5-royal-switch/hero", genre: "RPG", rating: "4.6/5", year: "2019", price: "$71.99", percent: "10%", purchases: "321"},
    {name: "Super Mario Odyssey", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5", genre: "Adventure", rating: "4.5/5", year: "2017", price: "$59.99", percent: "25%", purchases: "325"},
    {name: "Xenoblade Chronicles 3", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000053336/e933b48650b33b355e9cf2583da5c94b77180e40fb02d050041083dd62f4df39", genre: "Adventure", rating: "4.5/5", year: "2022", price: "$71.99", percent: "10%", purchases: "257"},
    {name: "Pokken Tournament DX", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000001132/92721f9dac0b86ff11694424bcac9b263cbd7904bc6f9da5a2eaa09bd9d1c855", genre: "Fighting", rating: "4.5/5", year: "2017", price: "$71.99", percent: "10%", purchases: "144"},
    {name: "FINAL FANTASY VII", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/en_CA/games/switch/f/final-fantasy-vii-switch/hero", genre: "RPG", rating: "4.4/5", year: "2019", price: "$10.74", percent: "50%", purchases: "392"},
    {name: "Kirby and the Forgotten Land", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000046405/d1cf83dea46094b85247f40ca30ea4557730a319be0bfe544a4fa929144cf6c2", genre: "Adventure", rating: "4.4/5", year: "2022", price: "$67.99", percent: "15%", purchases: "281"},
    {name: "Fire Emblem: Three Houses", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000007606/c499fdc86779ca95e61daed1f94288a245d196360d278138e56d44097d1a3878", genre: "RPG", rating: "4.2/5", year: "2019", price: "$71.99", percent: "10%", purchases: "178"},
    {name: "Super Mario 3D All-Stars", image: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/articles/2021/super-mario-3d-all-stars-leaves-nintendo-eshop-on-march-31st/800x450_Switch_News_Mario3DAllStars_main", genre: "Adventure", rating: "4.1/5", year: "2020", price: "$56.99", percent: "5%", purchases: "523"},
    {name: "Skullgirls 2nd Encore", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000019148/d4bb5a5fa5df59e9ed4ca1b4c5a53811d9c4d322aa55cd94d074be63381ff788", genre: "Fighting", rating: "3.9/5", year: "2019", price: "$31.82", percent: "5%", purchases: "86"},
    {name: "PMD: Rescue Team DX", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/software/switch/70010000012523/66593a5969de4b12d9de025e80843ed7cf69671e26b382994c7c0afe00ada30d", genre: "RPG", rating: "3.8/5", year: "2020", price: "$63.99", percent: "20%", purchases: "116"},
    {name: "Nickelodeon All-Star Brawl", image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000035763/27409c3c9775e324b5cffc7c693abb8b5a7ac34ea5f031bf706603e94674ccd7", genre: "Fighting", rating: "3.4/5", year: "2021", price: "$37.49", percent: "25%", purchases: "216"}
  ];

  const defaultSelectedGenres = ["Adventure", "Fighting", "RPG"];
  const [selectedGenres, setSelectedGenres] = useState(defaultSelectedGenres);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    setSelectedGenres((prevSelectedGenres) => {
      if (checked) {
        return [...prevSelectedGenres, name];
      } else {
        return prevSelectedGenres.filter((genre) => genre !== name);
      }
    });
  };

  const filteredCards = gameList.filter((card) => selectedGenres.includes(card.genre));

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>{card.name}</Card.Title>
          <hr />
          <Card.Text style={{ fontSize: '1.2vw', fontWeight: 'bold' }}>
            Discount Price: {card.price} ({card.percent} off)<br />
            Year Released: {card.year}<br />
            Purchases: {card.purchases}<br />
            Rating: {card.rating}<br />
            Genre: {card.genre}<br />
          </Card.Text>
          <div className="topnav" style={{ fontSize: '1.2vw' }}>
            <a href="./buy-two"><h6 className="h-six">Purchase game</h6></a>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <Container fluid>
        <Row>
          <h6></h6>
          {/* Navbar */}
          <Col xs={2}>
            <div className="topnav">
              <a className="active" href="./"><h6 className="h-six"></h6></a>
              <a className="./book-button" href="./buy-one"><h6 className="h-six">Buy Now</h6></a>
              <a href="./about-us"><h6 className="h-six">About Us</h6></a>
              <a href="./reviews"><h6 className="h-six">Reviews</h6></a>
              <a href="./our-games"><h6 className="h-six">Our Games</h6></a>
            </div>
          </Col>
          {/* Header */}
          <Col>
            <h1 className="h-one">Our Games</h1>
            <h2 className="h-two">Check Out Our Discounted Games</h2>
          </Col>
          <h6></h6>
        </Row>
        <Row>
          <Col xs={2}>
            {/* Faceted Search Checkboxes */}
            <Sticky enabled={true} top={10}>
              <form className="faceted-search">
                <h5 className="h-five" style={{ textAlign: "center" }}>Filter By Genre</h5>
                <hr />
                <h6 className="h-six">Adventure: <input type="checkbox" name="Adventure" style={{ float: "right" }} onChange={handleCheckboxChange} checked={selectedGenres.includes("Adventure")} /></h6>
                <h6 className="h-six">Fighting: <input type="checkbox" name="Fighting" style={{ float: "right" }} onChange={handleCheckboxChange} checked={selectedGenres.includes("Fighting")} /></h6>
                <h6 className="h-six">RPG: <input type="checkbox" name="RPG" style={{ float: "right" }} onChange={handleCheckboxChange} checked={selectedGenres.includes("RPG")} /></h6>
              </form>
            </Sticky>
          </Col>
          <Col>
            <div className="grid">
              {filteredCards.map(renderCard)}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OurGames;
