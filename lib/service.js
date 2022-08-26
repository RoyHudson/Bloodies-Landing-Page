const API_URL = process.env.NUXT_ENV_BASE_URL

export const loginUsersApi = async (_user) => {
  const newUser = { identifier: _user.username, password: _user.password }
  try {
    const res = await fetch(`${API_URL}/tbl-usuarios?Email=${_user.username}&Password=${_user.password}`)
    console.log('login')
  } catch (error) {
    throw Error(error.message)
  }
}

export const createUserApi = async (user) => {
  try {
    const res = await fetch(`${API_URL}/tbl-usuarios`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(user),
    });
    console.log('register')
  } catch (error) {
    throw Error(error.message);
  }
};