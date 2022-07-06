
const Requests = {
    loginRequest: "http://localhost:5000/api/user/user/login",
    changePwRequest: 'http://localhost:5000/api/user/user/change_password',
    addUserRequest: 'http://localhost:5000/api/admin/user/add_user', 
    publishQuestion: 'http://localhost:5000/api/user/mailbox/publish_question',
    approveQuestion: 'http://localhost:5000/api/admin/mailbox/approve_question',
    refuseQuestion: 'http://localhost:5000/api/mailbox/refuse_question',
    replyQuestion: 'http://localhost:5000/api/admin/mailbox/reply_question',
    fetchQuestionTypes: 'http://localhost:5000/api/admin/type/list_types_admin',
    fetchAccount: 'http://localhost:5000/api/user/account_info', 
    fetchRoleList: 'http://localhost:5000/api/admin/role/list_roles', 
    fetchUsersList: 'http://localhost:5000/api/user/list_users',
    fetchQuestionList: 'http://localhost:5000/api/admin/mailbox/list_questions_admin',
    fetchQuestionBasedOnStatus: 'http://localhost:5000/api/mailbox/list_questions?status=',
}

export default Requests;