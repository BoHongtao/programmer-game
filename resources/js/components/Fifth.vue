<template>
    <el-container>
        <el-aside width="260px">
            <img src="/img/rs.png" style="margin-top: 100px">
        </el-aside>
        <el-main>
            <el-row direction="horizontal">
                <el-input v-model="input" placeholder="请输入秘钥"></el-input>
                <el-button type="primary" v-on:click="commit">提交密钥</el-button>
                <el-button type="success" v-on:click="getkey">获取密钥</el-button>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        data () {
            return {
                input: '',
                dialogVisible: false
            }
        },
        methods:{
            commit() {
                const _this = this;
                let input_key = _this.input;
                axios.post('/index.php/api/index/one', {
                    step: '5',
                    key: input_key
                }).then(function (response) {
                    if(response.data.code==200){
                        _this.$message({
                            message: '卧槽，这都过了，6666666',
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
                this.$message('你以为二维码是摆设？');
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
