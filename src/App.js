import React, { Component } from "react";
import add from "./assets/add.svg";
import remove from "./assets/remove.svg";
import car from "./assets/car.svg";
import styled from "styled-components";

const Mother = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoList01 = styled.section`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
`;

const BoxCars = styled.div`
display: flex;
flex-direction: column;
border: solid #DCDCDC;
margin-top: 1rem;
margin-left: 1rem;

}
.titleBoxInfo{
display:flex;
justify-content: space-between;
background-color: #DCDCDC;

}
.titleBoxInfo:hover {
background: #00BFFF;
color: white;
}

.btAdd{
border: none;
cursor:pointer;
background: none;

}`;

const Infor = styled.div`
width: 15vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
font-size: 15px;
}
`;

const ShoppingCars02 = styled.section`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid #dcdcdc;
  background-image: url(${car});
  background-repeat: no-repeat;
`;

const InfoCar = styled.div`
  width: 25vw;
  background-color: #add;
  border: solid;
  margin-top: 1rem;
  border-radius: 15px 0px 15px 0px;

  .paragraph {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .btRemove {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const Total = styled.section`
  width: 30vw;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

class App extends Component {
  state = {
    listCars: [
      {
        marca: "Jetta",
        montadora: "Volkswagem",
        preco: 144000,
        tipo: "Sedan",
        id: 1
      },

      {
        marca: "Polo",
        montadora: "Volkswagem",
        preco: 70000,
        tipo: "Hatch",
        id: 2
      },

      {
        marca: "T-Cross",
        montadora: "Volkswagem",
        preco: 123000,
        tipo: "SUV",
        id: 3
      },

      {
        marca: "Tiguan R-line",
        montadora: "Volkswagem",
        preco: 146000,
        tipo: "SUV",
        id: 4
      },

      {
        marca: "Civic",
        montadora: "Honda",
        preco: 115000,
        tipo: "Sedan",
        id: 5
      },

      {
        marca: "Corolla",
        montadora: "Toyota",
        preco: 110000,
        tipo: "Sedan",
        id: 6
      },

      {
        marca: "Corolla Cross",
        montadora: "Toyota",
        preco: 184000,
        tipo: "SUV",
        id: 7
      },

      {
        marca: "Compass",
        montadora: "Jeep",
        preco: 132000,
        tipo: "SUV",
        id: 8
      },

      {
        marca: "Golf G TI",
        montadora: "Volkswagem",
        preco: 138000,
        tipo: "Hatch",
        id: 9
      }
    ],
    shoppingCars: [],
    total: ""
  };

  addCars = (item) => {
    this.setState(
      {
        shoppingCars: this.state.shoppingCars.concat(item)
      },
      () =>
        this.setState({
          total: this.state.total.concat(this.state.shoppingCars)
        })
    );
    console.log(this.state.shoppingCars);
  };

  removeCars = (id) => {
    this.setState({
      shoppingCars: this.state.shoppingCars.filter((carro) => carro.id !== id)
    });
  };

  render() {
    return (
      <div>
        <Title>
          <h1>Loja de Carros!</h1>
        </Title>

        <Mother>
          <InfoList01>
            {this.state.listCars.map((item, index) => (
              <div key={index}>
                <BoxCars>
                  <h2 className="titleBoxInfo">
                    {" "}
                    {item.marca}
                    <button
                      className="btAdd"
                      onClick={() => this.addCars(item)}
                    >
                      <img src={add} alt="Imagem de Adicionar" />
                    </button>
                  </h2>

                  <Infor>
                    <p>
                      <b>Montadora:</b> {item.montadora}{" "}
                    </p>
                    <p>
                      <b> Preço: </b>{" "}
                      {item.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        currencyDisplay: "symbol"
                      })}
                    </p>
                    <p>
                      <b>Tipo:</b> {item.tipo}{" "}
                    </p>
                  </Infor>
                </BoxCars>
              </div>
            ))}
          </InfoList01>

          <ShoppingCars02>
            {this.state.shoppingCars.map((item) => (
              <div>
                <InfoCar>
                  <h2>
                    {" "}
                    {item.marca}
                    <button
                      className="btRemove"
                      onClick={() => this.removeCars(item.id)}
                    >
                      <img src={remove} alt="Remove" />
                    </button>
                  </h2>
                  <div className="paragraph">
                    <p>
                      {" "}
                      <b>Tipo:</b> {item.tipo}{" "}
                    </p>
                    <p>
                      {" "}
                      <b>Preço:</b>{" "}
                      {item.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        currencyDisplay: "symbol"
                      })}{" "}
                    </p>
                  </div>
                </InfoCar>
              </div>
            ))}

            <Total>
              <h4>
                {" "}
                <p>Total: </p>
              </h4>
              <p>
                {" "}
                <p>
                  {this.state.shoppingCars
                    .reduce((a, c) => a + c.preco, 0)
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      currencyDisplay: "symbol"
                    })}{" "}
                </p>{" "}
              </p>
            </Total>
          </ShoppingCars02>
        </Mother>
      </div>
    );
  }
}
export default App;
