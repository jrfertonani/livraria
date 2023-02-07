module.exports = (sequelize, DataTypes) =>{
    const Livro = sequelize.define("Livro",{
        nome: DataTypes.STRING(85)
    },{
        tableName:"livros",
        timestamps: false
    });

    return Livro;
}