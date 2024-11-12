from flask import Flask, jsonify, request
from models import db, Employee
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)

with app.app_context():
    db.create_all()  

@app.route('/employees', methods=['POST'])
def add_employee():
    data = request.json
    new_employee = Employee(name=data['name'], salary=data['salary'])
    db.session.add(new_employee)
    db.session.commit()
    return jsonify({'message': 'Employee added', 'employee_id': new_employee.id}), 201

@app.route('/employees/<int:employee_id>/payment', methods=['PUT'])
def update_payment_status(employee_id):
    employee = Employee.query.get(employee_id)
    if not employee:
        return jsonify({'error': 'Employee not found'}), 404
    
    data = request.json
    employee.payment_status = data.get('payment_status', employee.payment_status)
    db.session.commit()
    
    return jsonify({'message': 'Payment status updated', 'employee_id': employee_id, 'new_status': employee.payment_status})

@app.route('/employees/<int:employee_id>/disburse_salary', methods=['POST'])
def disburse_salary(employee_id):
    employee = Employee.query.get(employee_id)
    if not employee:
        return jsonify({'error': 'Employee not found'}), 404
    
   
    employee.payment_status = 'Paid'
    db.session.commit()
    
    return jsonify({'message': 'Salary disbursed', 'employee_id': employee_id, 'new_status': employee.payment_status})

if __name__ == '__main__':
    app.run(debug=True)

