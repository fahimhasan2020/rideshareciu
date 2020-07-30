const Title = titleProps => ({
    methods: {
        init: function() {
            document.title = titleProps;
        },
    },
});
export default Title;
