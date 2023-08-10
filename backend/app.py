from pymongo import MongoClient
from flask import Flask, render_template, request, jsonify
app = Flask(__name__)
# 아래 URL이 MongoDB의 주소 connect -> DB의 driver python을 변경하고 버전 3.6 or later로 설정 후 아래에서 복붙하면 됨.
client = MongoClient(
    'mongodb+srv://sparta:test@cluster0.svk42ds.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta


@app.route('/')
def home():
    return render_template('index.html')

# 유저 생성 post 요청


@app.route('/member', methods=['POST'])
def user_post():
    name_receive = request.form['name_give']

    doc = {
        'name': name_receive,
        'mbti': 'mbtiTest',
        'stack': ['stackTest'],
        'tmi': 'tmiTest',
        'blog': 'blogTest',
        'github': 'gitTest',
        'intro': 'introTest',
        'img': 'imgTest'
    }
    db.member.insert_one(doc)
    print('post 데이터 저장', doc)
    return jsonify({'msg': 'app.py > post 데이터 저장 완료'})

# 유저 정보 가져오는 get 요청


@app.route('/member', methods=['GET'])
def members_get():
    all_members = list(db.member.find({}, {'_id': False}))
    return jsonify({'all_members': all_members})

# 삭제 요청


@app.route('/member', methods=['DELETE'])
def user_delete():
    name_receive = request.form['name_give']
    db.member.delete_one({'name': name_receive})
    return jsonify({'msg': '삭제 완료!'})


@app.route('/member_modify', methods=['POST'])
def user_modify():
    name_receive = request.form['name_give']
    att_category_receive = request.form['att_category_give']
    att_to_receive = request.form['att_to_give']
    if (att_category_receive == 'stack'): # stack인 경우엔 배열로 저장
        att_to_receive = request.form['att_to_give']
        att_to_receive = att_to_receive.split(',') # 클라이언트에서 배열을 전달 받으면 ','로 구분된 문자열 상태로 들어옴.
    else: # 그 외의 경우엔 문자열로 저장
        att_to_receive = request.form['att_to_give']
    db.member.update_one({'name':name_receive},{'$set':{ att_category_receive : att_to_receive }})
    return jsonify({'msg': '수정 완료!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5002, debug=True)
