<template>
    <el-main>
        <el-row direction="horizontal">
            <el-input v-model="input" placeholder="请输入秘钥"></el-input>
            <el-button type="primary" v-on:click="commit">提交秘钥</el-button>
            <el-button type="success" v-on:click="getkey">获取秘钥</el-button>
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
                var _this = this;
                let input_key = _this.input;
                if(input_key=="b4b147bc522828731f1a016bfa72c073"){
                    this.$message({
                        message: '恭喜你，过了第一关，不过我觉得你是运气好而已',
                        type: 'success'
                    });
                    this.$router.push({path:'/second'})
                }else{
                    this.$message({
                        message: '菜鸡，错了',
                        type: 'warning'
                    });
                }
            },
            getkey() {
                this.$message('你以为我真的会告诉你吗？');
                console.log("b4b147bc522828731f1a016bfa72c073")
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
