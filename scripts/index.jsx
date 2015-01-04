var React = require('react');

var data = require('../data.json');

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var SFLContent = React.createClass({
  render: function() {
    return (
      <div className="eleven columns">
        <p>Dear { this.props.data.persons },</p>

        <p>My { this.props.data.relative } was a { this.props.data.profession } in { this.props.data.country }. { this.props.data.deathReaction }, he { this.props.data.deathMethod }
        {' '}{ this.props.data.years } years ago during the { this.props.data.events }. I discovered later that he left the amount
        of { this.props.data.magot } million { this.props.data.currencies } in a bank located in { this.props.data.country2 }. I know it is { this.props.data.truthQuality },
        but I have to tell you  the truth: after my { this.props.data.relative }'s horrible death, my relatives
        decided to deny me the right to my { this.props.data.relative }'s inheritance. These { this.props.data.evil }
        {' '}and evil men, sequestrated me for years in a { this.props.data.cachette }, which made me unable to claim my due.
        I { this.props.data.mymood } because they raped me and { this.props.data.torture } every { this.props.data.period }.
        However, I didn't lose  my faith and prayed our Lord. He was so merciful that the last { this.props.data.period },
        somebody lost his { this.props.data.device } in the { this.props.data.cachette }. This morning, I realized it has a working Internet connexion
        and I found your email address.</p>

        <p>Please send me your coordinates, { this.props.data.personalInformation }, and your bank information
        so I can transfer my inheritance to a safe place. I know you are { this.props.data.qualityPerson }, so you will
        receive { this.props.data.award } percent of the total for your unlimited helpfulness.</p>

        <p>I pray God to bless you and your family for your help. May He send you even more { this.props.data.divineAward }.
        If my late { this.props.data.relative }  was still alive, he would be honoured to have such a great friend and he would
        admire you as he admired { this.props.data.admired }.</p>

        <p>Yours faithfully, { this.props.data.expeditorFirstName } { this.props.data.expeditorLastName }</p>
      </div>
    );
  }
});

var SFLBox = React.createClass({
  render: function(){
    this.getData();
    return (
      <div className="row">
        <div className="one column">
          <a href="javascript:void(0)" id="refresh" className="button" onClick={this.refresh}>
            <i className="fa fa-refresh"></i>
          </a>
        </div>
        <SFLContent data={this.props.data}/>
      </div>
    )
  },
  getData: function(){
    var dico = {};
    Object.keys(data).forEach(function(key){
      dico[key] = data[key][Math.floor(Math.random()*data[key].length)];
    });
    dico.country2 = data.country[Math.floor(Math.random()*data.country.length)];
    dico.magot = getRandomInt(10, 100);
    dico.award = getRandomInt(15, 40);
    dico.years = getRandomInt(2, 10);
    this.props.data = dico;
  },
  refresh: function(){
    this.getData()
    this.setState({data: this.props.data})
  }
});

React.render(
  <SFLBox />,
  document.getElementById('sfl-box')
);
