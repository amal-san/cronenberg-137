import React from 'react'
import Card from '../Components/Card';


class Character extends React.Component {
    constructor(){
        super()
        this.state ={
            isDataset:false,
            character:{},
            isloading:true
        }
        this.fetchDetails =this.fetchDetails.bind(this)
    }
    fetchDetails(inp) {
    
        console.log(window.location.href)
        const url = "https://rickandmortyapi.com/api/character/"
    
        fetch(url).then(res => {
          if(res.status === 200) {
              return res.json()
          }
          else return null;
          }).then(data => {
          if(data!==null)  {
              this.setState({
                  character:data,
                  isDataSet: true,
                  isloading:false
              });
          }
        });

     }
    
    componentDidMount() {
        this.fetchDetails(1)

    }
    
    render(){

        var comp=[];
        if (this.state.character.results == null){

        }
        else{
            for(var i=0;i<12;i++){
              comp.push(<Card key={i}
                  img={this.state.character.results[i].image} 
                  name={this.state.character.results[i].name} 
                  gender={this.state.character.results[i].gender} 
                  status= {this.state.character.results[i].status}
                  species={this.state.character.results[i].species}
                  origin={this.state.character.results[i].origin}
                  />)
            }
        }
        let cards =  comp
        return(
    <>
    <h2 className="ui center aligned icon header">
      <i className="circular users icon"></i>
      Characters
    </h2> 
    <div className='ui vertical raised row' style={{display:'flex',marginTop:'0rem'}}>
    {cards} 
    </div>
    </>)
    }
}

export default Character;