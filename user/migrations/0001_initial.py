# Generated by Django 4.0.6 on 2022-07-26 19:33

from django.conf import settings
import django.core.files.storage
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Condition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('denom', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('cellphone', models.CharField(blank=True, max_length=20, null=True)),
                ('phone', models.CharField(blank=True, max_length=20, null=True)),
                ('colorTheme', models.CharField(blank=True, max_length=30, null=True)),
                ('profileImage', models.ImageField(blank=True, storage=django.core.files.storage.FileSystemStorage(location='Unaf/media'), upload_to='profiles_images_persons', verbose_name='Imagen de perfil')),
                ('changeImage', models.IntegerField(blank=True, default=0, null=True)),
                ('condition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.condition')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
