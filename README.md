[install list]
@material-ui/core@4.11.3
@material-ui/icons@4.11.2
react-icons@4.2.0
react-cookie@4.0.3
react-router-dom@5.2.0
axios@0.21.1
react-modal


[shortcut command list]
rafce function component export 


[訂正] Login.js
Login.js内の inputChangedLog/inputChangedReg関数でuseReducer経由でユーザーがタイピングした際にemailとpasswordのstateを更新する処理が、アプリの動作上は動いてしまうのですが意図した状態更新になっていなかったので、下記コード部を訂正させて下さい。ポイントとしては、下記136と148行目の処理でuseReducerを経由せずにstateを更新してしまっていたので、dispatchをトリガーとしてreducer内で更新される様に訂正いたしました。



＊訂正前の処理は、コメントアウトで残しております。

＊コースのGitHubコードも更新済みです。



1. Login.js内のINPUT_EDITアクションを削除して、新しくINPUT_EDIT_LOG, INPUT_EDIT_REG作成
2. Login.js内のinputChangedLogとinputChangedRegを下記の様に修正
3. actionTypes.jsでINPUT_EDIT_LOGとINPUT_EDIT_REG追加
4. Login.jsのimportでINPUT_EDIT_LOGとINPUT_EDIT_REG 追加

