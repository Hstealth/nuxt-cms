import { mapState } from 'vuex';
export default{
	layout:'admin',
	head(){
		return {
			titleTemplate: '%s - 首页'
		};
	},
	data ({ req }) {
		return {
			name: req ? 'server' : 'client'
		};
	},
	methods: {
      	open() {
        	this.$message('这是一条消息提示');
      	}
  	},
	computed:mapState({
		storeData : state => state.admin
    }),
	mounted(){
		//console.log('路由',this.$route.path);
		console.log(this.storeData);
	}
};