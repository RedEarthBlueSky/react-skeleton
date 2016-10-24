var React = require('react');
var ListItem = require('./ListItem.jsx');  // is jsx must put extension

var ingredients = [{"id":1, "text":"halal"},
                  {"id":2, "text": "cheese"},
                  {"id":3, "text":"pickle"}];

var List = React.createClass({
  render: function () {
    var listItems = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
