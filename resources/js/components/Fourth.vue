<template>
    <el-main>
        <el-row direction="horizontal">
            <el-input v-model="input" placeholder="请输入秘钥"></el-input>
            <el-button type="primary" v-on:click="commit">提交密钥</el-button>
            <el-button type="success" v-on:click="getkey">获取密钥</el-button>
        </el-row>
    </el-main>
</template>
<script>
    export default {
        data () {
            return {
                input: '',
                dialogVisible: false
            }
        },
        mounted(){
            window.addEventListener('keydown', this.onClick);
            document.oncontextmenu = () => false;
        },
        methods:{
            commit() {
                const _this = this;
                let input_key = _this.input;
                axios.post('/index.php/api/index/one', {
                    step: '4',
                    key: input_key
                }).then(function (response) {
                    if(response.data.code==200){
                        _this.$message({
                            message: '恭喜你，过了第四关，现在开始第四关，我要准备一个小boss来对付你',
                            type: 'success'
                        });
                        _this.$router.push({path:'/fifth'})
                        return false;
                    }else{
                        _this.$message({
                            message: '菜鸡，错了',
                            type: 'warning'
                        });
                        return false;
                    }
                });
            },
            getkey() {
                this.$message('我觉得你应该找到规律了');
            }
        }
    }
</script>
<style scoped>
    .el-input{
        width: 300px;
        margin-left: 35%;
        margin-top: 20%;
    }
    .el-row{
        align:center
    }
</style>
