# Generated by Django 4.0.6 on 2022-08-06 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('move', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movedetail',
            name='previous_quant',
            field=models.DecimalField(decimal_places=3, max_digits=10, null=True),
        ),
        migrations.AlterField(
            model_name='move',
            name='date_move',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='move',
            name='date_today',
            field=models.DateField(auto_now_add=True),
        ),
    ]
