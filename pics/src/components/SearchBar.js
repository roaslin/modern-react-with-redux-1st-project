import React from 'react';

class SearchBar extends React.Component {
    // belongs to the uncontrolled element
    // onInputChange(event){
    //     event.target.value;
    // }
    
    // defining method as 'onFormSubmit(event)' { 
    // this way 'this.stater.term' will throw error 
    // SearchBar.js:11 Uncaught TypeError: Cannot read property 'state' of undefined
    onFormSubmit = event => {     
        // prevent form to submit itself
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    } 
    state = {term: ''};

    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field" >
                    <label>Image search</label>
                    {/* uncontrolled element*/}
                    {/* <input type="text"
                           onChange={this.onInputChange}/> */}
                    {/* controlled element*/}                           
                    <input type="text"
                           value={this.state.term}
                           onChange={(e)=> this.setState({term: e.target.value})}/>
                </div>
            </form>
        </div>
        );
    }
};

export default SearchBar;