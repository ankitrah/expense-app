import { login, logout } from '../../actions/auth';

test('should generate login action object correctly', () => {
    const uid = '123abc';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});