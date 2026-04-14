import api from '../../../app/api/axios';

// 새로운 자산(종목, 금액)을 등록할 때 사용
export async function save(vo) {
  return await api.post('asset', vo);
}

// 모든 자산 목록을 가져올 때 사용
export async function findAll() {
  return await api.get('asset');
}

// 특정 자산의 상세 내역을 볼 때 사용
export async function findById(id) {
  return await api.get(`asset/${id}`);
}

// 기록된 자산을 삭제할 때 사용
export async function deleteById(id) {
  return await api.delete(`asset/${id}`);
}

// 자산 정보(이름, 금액 등)를 수정할 때 사용
export async function updateAssetById(vo) {
  // 백엔드 컨트롤러가 @PutMapping("{id}") 형식이므로 vo.id를 경로에 넣어줍니다.
  return await api.put(`asset/${vo.id}`, vo);
}
