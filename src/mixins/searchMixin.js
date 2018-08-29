export default {
    computed: {
        filteredData () {
            return this.data.filter((dat) => {
                return dat.title.match(this.search); /* return dat.body.match(this.search); */
            });
        }
    }
}