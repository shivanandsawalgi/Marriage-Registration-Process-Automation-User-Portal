import logo from './logo.svg';
import './App.css';
import Transliterate from './googleTranslateTest/Transliterate';
// import TestTranslate from './googleTranslateTest/TestTranslate.jsx';
import BasicDetailsForm from './MarriageForms/Components/BasicDetailsForm';
import { Component } from 'react';
import FinalTranse from './googleTranslateTest/FinalTranse';
import FormDeatailsPrinting from './FormPrinting/FormDeatailsPrinting';
import FormPrintHOC from './FormPrinting/FormPrintHOC';


class  App extends Component{
  state={
    firstName:"shiva",
    showDetails : true,
    showDownloadedableForm : false,
    formData : {}
  }

  onchangeHandler=(key ,event)=>{

    this.setState({

      [key] : event.target.value
    })

  }

  setFormData = (formObject)=>{
    this.setState({
      formData : formObject,
      showDownloadedableForm : true,
      showDetails : false
    })

  }

  showDownloadedableFormPage = (formObject)=>{
    this.setFormData(formObject);
    
  }
  render(){
    return (
    <div className="App">

     {this.state.showDetails == true &&<BasicDetailsForm showDownloadedableFormPage = {this.showDownloadedableFormPage}></BasicDetailsForm> } 
     
     {this.state.showDownloadedableForm ==  true && <FormPrintHOC formData = {this.state.formData}></FormPrintHOC>}
      
   </div>
  );
}
}

export default App;
