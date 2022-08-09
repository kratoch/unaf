from django.urls import path, reverse_lazy
from django.contrib.auth import views as auth_views
from user.views import profile_img_upload

app_name = 'user'
urlpatterns = [
    path('login/', auth_views.LoginView.as_view(
        template_name='user/login.html'), name='loginPage'),
    path('logout', auth_views.LogoutView.as_view(), name='logoutPage'),
    path('password/reset', auth_views.PasswordResetView.as_view(
        template_name='user/password/password_reset_form.html', email_template_name='user/password'
                                                                                    '/password_reset_email.html',
        success_url=reverse_lazy('user:password_reset_done')), name='password_reset'),

    path('password/reset/done/', auth_views.PasswordResetDoneView.as_view(
        template_name='user/password/password_reset_done.html',
    ),
         name='password_reset_done'),
    path('password/reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(
        success_url=reverse_lazy('user:loginPage'),
        post_reset_login=True,
        template_name='user/password/password_reset_confirm.html',
    ),
         name='password_reset_confirm', ),
    path('user/profile_picture', profile_img_upload, name='profile_img_upload'),
]
