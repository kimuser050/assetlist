package com.kh.app18.book.repository;

import com.kh.app18.book.entity.AssetEntity;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AssetRepository {

    private final EntityManager em;

    public void save(AssetEntity entity) {
        em.persist(entity);
    }

    public List<AssetEntity> findAll() {
        // BookEntity -> AssetEntity로 수정
        String jpql = """
            select a from AssetEntity a where a.delYn = 'N' order by a.id desc
        """;
        return em.createQuery(jpql, AssetEntity.class).getResultList();
    }

    public AssetEntity findById(Long id) {
        // BookEntity -> AssetEntity로 수정
        String jpql = """
            select a from AssetEntity a where a.id = :id and a.delYn = 'N'
        """;
        return em.createQuery(jpql, AssetEntity.class)
                .setParameter("id", id)
                .getSingleResult();
    }
}