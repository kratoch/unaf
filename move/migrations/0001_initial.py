# Generated by Django 4.0.6 on 2022-07-26 19:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MoveType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('denomination', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='MoveDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quant', models.DecimalField(decimal_places=3, max_digits=10)),
                ('reagent', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.reagent')),
            ],
        ),
        migrations.CreateModel(
            name='Move',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=250, null=True)),
                ('date_today', models.DateField()),
                ('date_move', models.DateField(auto_now_add=True)),
                ('lab', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.lab')),
                ('move_detail', models.ManyToManyField(to='move.movedetail')),
                ('type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='move.movetype')),
            ],
        ),
    ]