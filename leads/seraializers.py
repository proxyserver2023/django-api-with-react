from rest_framework import serializers
from .models import Lead


class LeadSearializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
