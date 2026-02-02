import { useState, useContext } from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import $api from "../../utils/http";
import { Context } from "../../main";
import { LOGIN_ROUTE } from "../../utils/consts";
import { AxiosError } from "axios";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

export const Registration = () => {
    const context = useContext(Context);
    
    if (!context) {
        return null;
    }
    
    const { user } = context;
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handlePhoneChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            phone: value
        }));
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        if (formData.password.length < 4) {
            setError('Пароль должен содержать минимум 6 символов');
            return;
        }

        setLoading(true);

        try {
            const response = await $api.post('/auth/registration', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password
            });

            if (response.data) {
                setSuccess(true);
                
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    user.setUser(response.data.user);
                    user.setIsAuth(true);
                }

                setTimeout(() => {
                    if (response.data.token) {
                        navigate('/');
                    } else {
                        navigate(LOGIN_ROUTE);
                    }
                }, 2000);
            }
        } catch (err) {
            const error = err as AxiosError<{ message?: string; error?: string }>;
            if (error.response?.data?.message) {
                setError(error.response.data.message);
            } else if (error.response?.data?.error) {
                setError(error.response.data.error);
            } else if (error.message) {
                setError(error.message);
            } else {
                setError('Произошла ошибка при регистрации. Попробуйте еще раз.');
            }
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <div id="admin" className="flex justify-center items-center min-h-screen">        
                <div className="w-[472px] bg-[#FFFFFF] rounded-2xl shadow-xl p-8">
                    <h2 className="text-[32px] text-accentDark font-bold text-start mb-6">Регистрация</h2>
                     
                     <form className="flex flex-col" onSubmit={handleSubmit}>
                       
                       <div className="w-full flex justify-between">
                            <div className="w-1/2 m-1 flex-col justify-start items-start">
                                <p className="text-dark m-0 mt-2">Имя</p>
                                <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder=""
                                className="w-full border border-[#E4E2DF] rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                                required
                                />
                            </div>
                            
                            <div className="w-1/2 m-1 flex-col justify-start items-start">
                                <p className="text-dark m-0 mt-2">Фамилия</p>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder=""
                                    className="w-full border border-[#E4E2DF] rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
                                    required
                                />
                            </div>
                        </div>

                       <p className="text-dark m-0 mt-3">Электронная почта</p>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Введите ваш email..."
                        className="border border-[#E4E2DF] rounded-lg px-4 py-2 mt-1 mb-2 focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                        />


                        <PhoneInput
                            country={'ru'}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            inputClass="!w-full !border !border-[#E4E2DF] !rounded-lg !px-4 !py-2 focus:!outline-none focus:!ring-2 focus:!ring-accent"
                            placeholder="+7 (___) ___-__-__"
                        />

                        <p className="text-dark m-0 mt-3">Пароль</p>
                        <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Введите ваш пароль..."
                        className="mb-2 border border-[#E4E2DF] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                        minLength={6}
                        />

                        {error && (
                            <div className="mb-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mb-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                                Регистрация успешна! Перенаправление...
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-b_fone mt-2 text-white px-6 py-2 rounded-lg hover:bg-accentDark transition-colors ${
                                loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {loading ? 'Регистрация...' : 'Создать аккаунт'}
                        </button> 

                     </form>
                </div>
            
            </div>
        </>
    )
}

