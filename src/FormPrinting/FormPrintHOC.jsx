import React from 'react';
import { Component } from "react";
import ReactToPrint from "react-to-print";
import FormDeatailsPrinting from './FormDeatailsPrinting';
import Priest from './Priest';

class FormPrintHOC extends Component{
    constructor(props){
        super(props);
        this.refToPrint = React.createRef();
    }

    componentDidMount =()=>{
        this.refToPrint.current.click();
    }

    render(){
        return(<div>
            <ReactToPrint
                    trigger={() => {
                        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                        // to the root node of the returned component as it will be overwritten.
                        return <a href="#" ref={this.refToPrint}>Print this form!</a>;
                    }}
                    
                    content={() => this.componentRef} documentTitle={"Marriage_Cetificate"}
                />

                <FormDeatailsPrinting ref={el => (this.componentRef = el) } formData={this.props.formData}></FormDeatailsPrinting>

                

                

                

        </div>)
    }

}

export default FormPrintHOC;