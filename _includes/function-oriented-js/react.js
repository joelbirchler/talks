var Greetings = React.createClass({
    render: function() {
        return <p>
            Howdy, {this.props.firstName}!
            You are visitor {this.state.visitorCount}.
        </p>;
    }
});
