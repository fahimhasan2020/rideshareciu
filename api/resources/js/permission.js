module.exports = {
    methods: {
        /**
         * Translate the given key.
         */
        permissionCheck(permission) {
            if (this.$page.permission[permission]){
                return true;
            }else {
                return false;
            }
        },
    },
}
