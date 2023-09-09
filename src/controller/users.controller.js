// const Pool=require('pg').Pool;
// const pool=new Pool({
//     host: process.env.HOST,
//     port: 5432,
//     user: "postgres",
//     database: "testdb",
//     password: process.env.PASSWORDPSQL
// });

// const GetUsersAndComents=(req, res)=>{
//     pool.query('SELECT * FROM users join coments on id=user_id GROUP BY user_id;', (err, data)=>{
//         if(err){
//             console.log(err.message);
//    return res.status(404).json(err.message);
// };
// console.log(data.rows);
//         res.status(200).json(data.rows);
//     })
// };



// const GetUserById=(req, res)=>{
//     const id=parseInt(req.params.id);
//     pool.query('SELECT * FROM users join coments on id=user_id WHERE id=$1', [id], (err, data)=>{
//         if(err){
//             console.log(err.message);
//    return res.status(404).json(err.message);
//         };
//         res.status(200).json(data.rows);
//     })
// };

// const CreateUser=(req, res)=>{
//     const {username, email}=req.body;
//     pool.query('INSERT INTO users (username, email) values($1, $2)', [username, email], (err, data)=>{
//         if(err){
//             console.log(err.message);
//    return res.status(404).json(err.message);
//         };
//         res.status(201).send('user added with id: '+data.insertId);
//     })
// };

// const AddComent=(req, res)=>{
//     const id=parseInt(req.params.id);
//     const coment=req.body.coment;
//     pool.query('INSERT INTO coments (user_id, coment) values($1, $2)', [id, coment], (err, data)=>{
//         if(err){
//             console.log(err.message);
//    return res.status(404).json(err.message);
//         };
//         res.status(201).send('coment added with id: '+data.insertId);
//     })
// };

// const UpdateUser=(req, res)=>{
//     const id=parseInt(req.params.id);
//     const {username, email}=req.body;
//     pool.query('UPDATE users SET username=$1, email=$2 WHERE id=$3', [username, email, id], (err, data)=>{
//         if(err){
//             console.log(err.message);
//    return res.status(404).json(err.message);
//         };
//         res.status(200).send('user update with id: '+id);
//     })
// }
// const DeleteUser=(req, res)=>{
//     const id=parseInt(req.params.id);
//     pool.query('DELETE FROM users where id=$1', [id], (err, data)=>{
//         if(err){
//             console.log(err.message);
//    return res.status(404).json(err.message);
//         };
//         res.status(200).send('user deleted with id: '+id);
//     })
// };


// module.exports={
//     GetUsersAndComents,
//     GetUserById,
//     CreateUser,
//     AddComent,
//     UpdateUser,
//     DeleteUser
// };