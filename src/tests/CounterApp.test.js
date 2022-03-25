import '@testing-library/jest-dom';
import React       from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba de componente CounterApp', () => {

    // let wrapper; // undefined
     let wrapper = shallow( <CounterApp /> ); // aunque se repita lo hacemos asi para no perder la ayuda el inteli...
    
    beforeEach( ()=> {
         wrapper = shallow( <CounterApp /> );
    });

    test('Debe de mostrar el <CounterApp /> correctamente', () => {

        const wrapper = shallow( <CounterApp /> );

        expect( wrapper ).toMatchSnapshot();

    });
  
    test('Debe de mostrar el valor por defecto de 100', () => {

        // excepto aqui por que le pasamos el valor
        const wrapper = shallow( <CounterApp value={ 100 }/> );
        
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '100' ); 

    });

    test('Debe de incrementar el valor con el boton +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });
    
    test('Debe de incrementar el valor con el boton -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    });
 
    test('Debe de inicializar el valor por defecto reset', () => {
        const wrapper = shallow( <CounterApp value={ 105 }/> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        console.log( counterText );

        expect( counterText ).toBe('105');
        

    });



});