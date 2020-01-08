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
                var _this = this;
                let input_key = _this.input;
                if(input_key=="d3d9446802a44259755d38e6d163e820"){
                    this.$message({
                        message: '恭喜你，过了第三关',
                        type: 'success'
                    });
                    this.$router.push({path:'/fourth'})
                }else{
                    this.$message({
                        message: '菜鸡，错了',
                        type: 'warning'
                    });
                }
            },
            getkey() {
                this.$message('你以为我真的会告诉你吗？');
                console.log("d3d9446802a44259755d38e6d163e820")
            },
            onClick (val) {
                if (val.keyCode === 123) {
                    window.event.preventDefault();
                    return false
                }
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
