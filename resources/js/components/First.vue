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
        methods:{
            commit() {
                const _this = this;
                let input_key = _this.input;
                axios.post('/index.php/api/index/one', {
                    step: '1',
                    key: input_key
                }).then(function (response) {
                    if(response.data.code==200){
                        _this.$message({
                            message: '恭喜你，过了第一关，不过我觉得你是运气好而已，现在是第二关',
                            type: 'success'
                        });
                        _this.$router.push({path:'/second'})
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
                this.$message('你以为我真的会告诉你吗？');
                console.log("恭喜你，秘钥是"+"b4b147bc522828731f1a016bfa72c073"+"我是故意放水的")
            },
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
