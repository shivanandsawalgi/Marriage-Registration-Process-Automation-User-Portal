import React, { Component } from 'react';

class TestTranslate extends Component {

    constructor(props) {
        super();

        this.state={
            uname : "",
        }

        this.listOfName = [];   
    }

    translateFunc(englishText) {

        let self = this;
        let googleTransliterate = require('google-input-tool');

        let sourceText = englishText;
        let inputLanguage = 'mr-t-i0-und';
        let maxResult = 8;
        let request = new XMLHttpRequest();

        googleTransliterate(request, sourceText, inputLanguage, maxResult)
            .then(function (response) {
                console.log( response);
                let arrOfMarathiOptions =[];

                response.map(marathiNamearr =>{
                    arrOfMarathiOptions.push(marathiNamearr[0]);
                })

                console.log(arrOfMarathiOptions);
                self.listOfName = arrOfMarathiOptions;
                
            });
    }

    changeInputHandler= (event)=>{

        let value = event.target.value;

        this.setState({
            uname : value
        });

        this.translateFunc(value);



    }

    render() {
        // this.translateFunc();
        return (
            <div>
                <input name="uname" value={this.state.uname} onChange={this.changeInputHandler}    ></input>

                {/* <input type="text" list="cars" />
<datalist id="cars">
  <option>Volvo</option>
  <option>Saab</option>
  <option>Mercedes</option>
  <option>Audi</option>
</datalist> */}
            </div>
        )
    }
}

export default TestTranslate;