function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 
    const resultDiv = document.getElementById('result');
    const bmiInfoDiv = document.getElementById('bmi-info');
    const healthTipsDiv = document.getElementById('health-tips');
    const tipList = document.getElementById('tip-list');
  
    if (!weight || !height || weight <= 0 || height <= 0) {
      resultDiv.innerHTML = 'Please enter valid weight and height values';
      resultDiv.className = 'result show';
      bmiInfoDiv.className = 'bmi-info';
      healthTipsDiv.className = 'health-tips';
      return;
    }
  
    const bmi = weight / (height * height);
    let category, className, tips;
  
    if (bmi < 18.5) {
      category = 'Underweight';
      className = 'underweight';
      tips = [
        'Increase your caloric intake with nutrient-rich foods',
        'Include protein-rich foods in every meal',
        'Add healthy fats to your diet like nuts and avocados',
        'Consider consulting a nutritionist for a personalized plan'
      ];
    } else if (bmi < 24.9) {
      category = 'Normal weight';
      className = 'normal';
      tips = [
        'Maintain a balanced diet with plenty of vegetables',
        'Stay physically active with regular exercise',
        'Get adequate sleep and manage stress',
        'Regular health check-ups to maintain your health'
      ];
    } else if (bmi < 29.9) {
      category = 'Overweight';
      className = 'overweight';
      tips = [
        'Focus on portion control and mindful eating',
        'Increase physical activity to 150 minutes per week',
        'Choose whole foods over processed foods',
        'Track your food intake and exercise'
      ];
    } else {
      category = 'Obese';
      className = 'obese';
      tips = [
        'Consult with healthcare providers for a treatment plan',
        'Start with low-impact exercises like walking or swimming',
        'Make gradual, sustainable dietary changes',
        'Consider working with a registered dietitian'
      ];
    }
  
    resultDiv.innerHTML = `
      Your BMI is <strong>${bmi.toFixed(1)}</strong><br>
      Category: <strong>${category}</strong>
    `;
    resultDiv.className = `result show ${className}`;
  
    bmiInfoDiv.innerHTML = `
      <strong>What does your BMI mean?</strong><br>
      BMI is a measure of body fat based on height and weight. However, it's important to note that BMI is just one indicator of health and doesn't account for factors like muscle mass, bone density, age, and gender.
    `;
    bmiInfoDiv.className = 'bmi-info show';
  
    tipList.innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
    healthTipsDiv.className = 'health-tips show';
    tipList.className = 'tip-list show';
  
    
    resultDiv.scrollIntoView({ behavior: 'smooth' });
  }
  
  document.getElementById('calculate').addEventListener('click', calculateBMI);
  
