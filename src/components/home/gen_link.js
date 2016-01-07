
import React from 'react';
//import mongoose from 'mongoose';

//mongoose.connect('mongodb://localhost/testDB');

/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log('connection successful...');
});*/

class GenerateLink extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.refs.URL.focus();
  }

  onSubmit(event){
    event.preventDefault();

    const userMailSchema = mongoose.Schema({mail: String});
    const Mail = mongoose.model('userMail', userMailSchema);


    let input = this.refs.URL;
    let URL = input.value;
    console.log("connect to : Additor.in#" + URL); // TODO : link to a site
    input.value = '';

    let mail = new Mail({mail: URL});
    mail.save(function(err) {
      if(err) console.log('error ocurr = ' + err);
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="generateLinkForm" action="" method="get" style={{width: '100%', height: 'auto', textAlign: 'center'}}>
        <div className="input-group">
          <span className="input-group-btn">
            <input type="submit" defaultValue="Additor.in#" className="btn btn-lg" style={{width: '100%', backgroundColor: '#333949', color: '#EC5D57'}} />
          </span>
          <input ref="URL" type="text" className="form-control input-lg" style={{width: '100%', backgroundColor: 'white'}} placeholder="Enter a URL" />
        </div>
      </form>
    );
  }
}

export default GenerateLink;