# Generated by Django 5.1 on 2024-08-29 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='date_of_birth',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='phone_number',
        ),
        migrations.AlterField(
            model_name='customuser',
            name='password',
            field=models.CharField(max_length=255),
        ),
    ]