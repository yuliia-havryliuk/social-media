import AnimalsList from './components/AnimalsList';
import animals from './animals';
import React from 'react';
import Section from './components/Section';
export default function App() {
  return (
    <div>
      <Section title="My favourite animals">
        <AnimalsList items={animals} />
      </Section>
      <Section />
      {/*{animals.map(animal => (
            <Animal
                key = {animal.id}
                name={animal.name}
                shortName={animal.about.name}
                color1={animal.color}
                height1={animal.height}
                imageUrl={animal.about.url}
                quantity={animal.quantity}
            />
        ))}*/}
      {/*<Animal
        name={animals[0].name}
        shortName={animals[0].about.name}
        color1={animals[0].color}
        height1={animals[0].height}
        //imageUrl={animals[0].about.url}
        quantity={animals[0].quantity}
      />
      <Animal
        name={animals[1].name}
        shortName={animals[1].about.name}
        color1={animals[1].color}
        height1={animals[1].height}
        imageUrl={animals[1].about.url}
        quantity={animals[1].quantity}
      />
      <Animal
        name={animals[2].name}
        shortName={animals[2].about.name}
        color1={animals[2].color}
        height1={animals[2].height} //можна ввести height1 = 'Text' і консоль викине ворнінг, бо тип не співпадає
        imageUrl={animals[2].about.url}
        quantity={animals[2].quantity}
      />
      <Animal
        name={animals[3].name}
        shortName={animals[3].about.name}
        color1={animals[3].color}
        height1={animals[3].height}
        image={animals[3].about.url}
        quantity={animals[3].quantity}
      />*/}
    </div>
  );
}

// import './App.css';
// import React from 'react';
//
// function App() {
//     return <div className=" App ">bla</div>;
// }
//
// export default App;
